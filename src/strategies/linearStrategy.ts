import {
  ThrottlerStrategy,
  TryAcquireResult,
} from "src/types/throttlerStrategy";

/**
 * Configuration options for creating a {@link LinearStrategy}.
 *
 * @example
 * // Allow one request every 500 milliseconds
 * {
 *  duration: 500
 * }
 */
export interface LinearStrategyConfig {
  /**
   * The minimum duration between requests, in milliseconds.
   */
  duration: number;
}

/**
 * A throttler that enforces a fixed delay between requests.
 *
 * This throttler ensures that each request occurs at least
 * `duration` milliseconds after the previous one, providing
 * consistent pacing without bursts.
 */
export class LinearStrategy implements ThrottlerStrategy {
  /**
   * The minimum duration between requests, in milliseconds.
   */
  readonly duration: number;

  /**
   * Timestamp of when the next request is allowed.
   */
  private slot: number;

  constructor({ duration }: LinearStrategyConfig) {
    if (duration < 0) {
      throw new RangeError("Duration must be non-negative");
    }
    this.duration = duration;
    this.slot = 0;
  }

  /**
   * Attempts to acquire permission to proceed with the operation.
   *
   * Allows the request if the current time is past `slot`.
   *
   * Otherwise, returns the timestamp when the next
   * request is allowed to indicate how long the caller
   * should wait before retrying.
   */
  tryAcquire(): TryAcquireResult {
    const now = performance.now();

    if (now < this.slot) {
      return { success: false, retryAfterMs: this.slot - now };
    }

    this.slot = now + this.duration;
    return { success: true };
  }
}
