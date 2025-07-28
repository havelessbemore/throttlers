import { poll } from "wait-utils";

import { Throttler, ThrottlerWaitOptions } from "./throttler";
import { ACQUIRED } from "./utils/constants";

/**
 * Configuration options for creating a {@link LinearThrottler}.
 *
 * @example
 * // Allow one request every 500 milliseconds
 * {
 *  duration: 500
 * }
 */
export interface LinearThrottlerConfig {
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
export class LinearThrottler implements Throttler {
  /**
   * The minimum duration between requests, in milliseconds.
   */
  readonly duration: number;

  /**
   * Timestamp of when the next request is allowed.
   */
  private slot: number;

  constructor({ duration }: LinearThrottlerConfig) {
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
  protected tryAcquire(): number {
    const now = performance.now();
    
    if (now < this.slot) {
      return this.slot - now;
    }

    this.slot = now + this.duration;
    return ACQUIRED
  }

  tryWait(): boolean {
    return this.tryAcquire() === ACQUIRED;
  }

  wait({ signal, timeout }: ThrottlerWaitOptions = {}): Promise<void> {
    return poll(ctx => {
      ctx.delay = this.tryAcquire();
      ctx.stop = ctx.delay === ACQUIRED;
    }, {
      delay: 0,
      signal,
      timeout,
    });
  }
}
