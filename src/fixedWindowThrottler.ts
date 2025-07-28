import { poll } from "wait-utils";

import { ACQUIRED } from "./utils/constants";
import { Throttler, ThrottlerWaitOptions } from "./throttler";

/**
 * Configuration options for creating a {@link FixedWindowThrottler}.
 *
 * @example
 * // 5 requests per second
 * {
 *  duration: 1000, // milliseconds
 *  limit: 5
 * }
 */
export interface FixedWindowThrottlerConfig {
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
 * A throttler that uses the fixed window algorithm.
 *
 * This throttler counts the number of requests within
 * each fixed-duration window. Once the limit is reached,
 * additional requests are delayed until future windows.
 *
 * Note: This approach can cause bursts of traffic at
 * window boundaries.
 */
export class FixedWindowThrottler implements Throttler {
  /**
   * The size of the window in milliseconds.
   */
  readonly duration: number;

  /**
   * The number of requests allowed per window.
   */
  readonly limit: number;

  /**
   * Timestamp marking the end of the current window.
   */
  private windowEnd: number;

  /**
   * Number of accepted requests in the current window.
   */
  private count: number;

  constructor({ duration, limit }: FixedWindowThrottlerConfig) {
    if (duration < 0) {
      throw new RangeError("Invalid duration");
    }
    if (limit < 1) {
      throw new RangeError("Invalid limit");
    }

    this.count = 0;
    this.duration = duration;
    this.limit = limit;
    this.windowEnd = 0;
  }

  /**
   * Attempts to acquire permission to proceed with a request.
   *
   * If the current window has capacity, returns <= 0.
   *
   * Otherwise, returns the number of milliseconds to wait
   * before the caller should retry.
   */
  protected tryAcquire(): number {
    const now = performance.now();

    if (now >= this.windowEnd) {
      this.windowEnd = now + this.duration;
      this.count = 0;
    }

    if (this.count + 1 > this.limit) {
      return this.windowEnd - now;
    }

    ++this.count;
    return ACQUIRED;
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
