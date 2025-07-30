import { StrategyThrottler } from "src/strategyThrottler";
import type {
  ThrottlerStrategy,
  TryAcquireResult,
} from "src/types/throttlerStrategy";

/**
 * Configuration options for creating a {@link LeakyBucketStrategy}.
 *
 * @example
 * // Allow bursts of up to 10 requests, with a drain of 5 per second
 * {
 *   capacity: 10,
 *   leakRate: 5
 * }
 */
export interface LeakyBucketConfig {
  /**
   * Maximum number of tokens the bucket can hold.
   *
   * This defines the burst capacity. Requests beyond this
   * limit are throttled until enough leakage has occurred.
   */
  capacity: number;

  /**
   * Rate at which tokens leak per second.
   *
   * A higher rate allows faster throughput.
   */
  leakRate: number;
}

/**
 * A throttler that uses the leaky bucket algorithm.
 *
 * Tokens are added to a "bucket" which drains at a steady rate
 * defined by `leakRate`. If the bucket overflows (`capacity` exceeded),
 * further requests are throttled until enough leakage has occurred.
 *
 * This method smooths bursts over time, providing a steady output rate.
 */
export class LeakyBucketStrategy implements ThrottlerStrategy {
  /**
   * Maximum capacity of the bucket.
   */
  readonly capacity: number;
  /**
   * Timestamp of the last leakage calculation.
   */
  private leakedAt: number;

  /**
   * Rate at which tokens are leaked, per second.
   */
  readonly leakRate: number;

  /**
   * Current number of tokens in the bucket.
   */
  private tokens: number;

  constructor({ capacity, leakRate }: LeakyBucketConfig) {
    if (capacity < 1) {
      throw new RangeError("Invalid capacity");
    }
    if (leakRate <= 0) {
      throw new RangeError("Invalid leak rate");
    }
    this.capacity = capacity;
    this.leakedAt = performance.now();
    this.leakRate = leakRate;
    this.tokens = 0;
  }

  /**
   * Attempts to acquire permission to proceed with a request.
   *
   * First, the number of leaked tokens since the last check
   * is calculated and the bucket's level is updated accordingly.
   *
   * If the bucket has capacity, the request is accepted.
   *
   * Otherwise, returns the timestamp of when enough leakage
   * will occur to allow the request.
   */
  tryAcquire(): TryAcquireResult {
    const now = performance.now();

    // Calculate tokens leaked since the last check
    const elapsed = (now - this.leakedAt) / 1000;
    const leaked = elapsed * this.leakRate;
    this.tokens = Math.max(0, this.tokens - leaked);
    this.leakedAt = now;

    // If full, calculate how long until capacity
    if (this.tokens > this.capacity - 1) {
      const delta = this.tokens - this.capacity + 1;
      const duration = (1000 * delta) / this.leakRate;
      return { success: false, retryAfterMs: Math.max(1, duration) };
    }

    // Accept the request
    ++this.tokens;
    return { success: true };
  }
}

export class LeakyBucketThrottler extends StrategyThrottler {
  constructor(config: LeakyBucketConfig) {
    super({ strategy: new LeakyBucketStrategy(config) });
  }
}
