import { StrategyThrottler } from "src/strategyThrottler";
import type {
  ThrottlerStrategy,
  TryAcquireResult,
} from "src/types/throttlerStrategy";

/**
 * Configuration options for creating a {@link SlidingWindowStrategy}.
 *
 * @example
 * // 5 requests per second
 * {
 *  duration: 1000, // milliseconds
 *  limit: 5
 * }
 */
export interface SlidingWindowConfig {
  /**
   * The size of the window in milliseconds.
   */
  duration: number;

  /**
   * The number of requests allowed per window.
   *
   * Requests above this limit will be delayed.
   */
  limit: number;
}

/**
 * A throttler that uses the sliding window algorithm.
 *
 * This throttler spreads requests across a moving time window,
 * tracking the timestamps of accepted requests and ensuring
 * no more than a fixed number occur within any given interval.
 */
export class SlidingWindowStrategy implements ThrottlerStrategy {
  /**
   * The size of the window in milliseconds.
   */
  readonly duration: number;

  /**
   * Points to the oldest slot in the current window.
   */
  private index: number;

  /**
   * The number of requests allowed per window.
   */
  readonly limit: number;

  /**
   * Timestamps of the last `limit` accepted requests.
   *
   * These are used to determine if a new request falls
   * within the allowed window, and to delay if necessary.
   */
  private slots: number[];

  constructor({ duration, limit }: SlidingWindowConfig) {
    if (duration < 0) {
      throw new RangeError("Invalid duration");
    }
    if (!Number.isInteger(limit) || limit < 1) {
      throw new RangeError("Invalid limit");
    }
    this.duration = duration;
    this.index = 0;
    this.limit = limit;
    this.slots = new Array(limit).fill(0);
  }

  /**
   * Attempts to acquire permission to proceed with a request.
   *
   * If the number of requests within the sliding window is
   * below the limit, the request is accepted and its expiration
   * timestamp (i.e. when it falls out of the window) is
   * recorded in the current slot.
   *
   * If the limit has been reached, the expiration time of the
   * oldest request is returned to indicate how long the caller
   * should wait before retrying.
   */
  tryAcquire(): TryAcquireResult {
    const now = performance.now();

    if (now < this.slots[this.index]) {
      return { success: false, retryAfterMs: this.slots[this.index] - now };
    }

    this.slots[this.index] = now + this.duration;
    this.index = (this.index + 1) % this.limit;
    return { success: true };
  }
}

export class SlidingWindowThrottler extends StrategyThrottler {
  constructor(config: SlidingWindowConfig) {
    super({ strategy: new SlidingWindowStrategy(config) });
  }
}
