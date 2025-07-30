import { StrategyThrottler } from "src/strategyThrottler";
import type {
  ThrottlerStrategy,
  TryAcquireResult,
} from "src/types/throttlerStrategy";

/**
 * Configuration options for creating a {@link TokenBucketStrategy}.
 *
 * @example
 *
 * // Allow bursts of up to 10 requests, refilling at 5 per second
 * {
 *  capacity: 10,
 *  refillRate: 5
 * }
 */
export interface TokenBucketConfig {
  /**
   * Maximum number of tokens the bucket can hold.
   *
   * This defines the burst capacity. Requests beyond this
   * limit are throttled until enough refill has occurred.
   */
  capacity: number;

  /**
   * Rate at which tokens refill per second.
   *
   * A higher rate allows faster throughput.
   */
  refillRate: number;
}

/**
 * A throttler that uses the token bucket algorithm.
 *
 * Allows requests to be made at a steady rate, while
 * still supporting occasional bursts.
 *
 * Each request consumes one token. Tokens are added
 * continuously over time based on the configured refill rate.
 */
export class TokenBucketStrategy implements ThrottlerStrategy {
  /**
   * Maximum number of tokens in the bucket.
   */
  readonly capacity: number;

  /**
   * Timestamp of the last refill calculation.
   */
  private refilledAt: number;

  /**
   * Rate at which tokens are added, per second.
   */
  readonly refillRate: number;

  /**
   * Current number of tokens in the bucket.
   */
  private tokens: number;

  constructor({ capacity, refillRate }: TokenBucketConfig) {
    if (capacity < 1) {
      throw new RangeError("Invalid capacity");
    }
    if (refillRate <= 0) {
      throw new RangeError("Invalid refill rate");
    }
    this.capacity = capacity;
    this.refilledAt = performance.now();
    this.refillRate = refillRate;
    this.tokens = capacity;
  }

  /**
   * Attempts to acquire permission to proceed with a request.
   *
   * First, the number of refilled tokens since the last check
   * is calculated and the bucket's level is updated accordingly.
   *
   * If at least one token is available, the request is accepted.
   *
   * Otherwise, returns the timestamp when a token will become
   * available to allow the request.
   */
  tryAcquire(): TryAcquireResult {
    const now = performance.now();

    // Calculate tokens refilled since the last check
    const elapsed = (now - this.refilledAt) / 1000;
    const added = elapsed * this.refillRate;
    this.tokens = Math.min(this.capacity, this.tokens + added);
    this.refilledAt = now;

    // If empty, calculate how long for the next token
    if (this.tokens < 1) {
      const delta = 1 - this.tokens;
      const duration = (1000 * delta) / this.refillRate;
      return { success: false, retryAfterMs: Math.max(1, duration) };
    }

    // Accept the request
    --this.tokens;
    return { success: true };
  }
}

export class TokenBucketThrottler extends StrategyThrottler {
  constructor(config: TokenBucketConfig) {
    super({ strategy: new TokenBucketStrategy(config) });
  }
}
