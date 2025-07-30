// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { type TimeoutError } from "wait-utils";

/**
 * Options to control the behavior of {@link Throttler.acquire}.
 */
export interface AcquireOptions {
  /**
   * An {@link AbortSignal} that allows cancellation.
   */
  signal?: AbortSignal;

  /**
   * Maximum duration to wait before timing out, in milliseconds.
   *
   * If acqisition exceeds this duration, a {@link TimeoutError} is thrown.
   */
  timeout?: number;
}

/**
 * An interface for throttlers that regulate the pacing
 * of operations to conform to a specified rate.
 */
export interface Throttler {
  /**
   * Attempts to acquire permission immediately.
   *
   * @returns `true` if allowed immediately, `false` otherwise.
   * If `false`, the caller may retry later or call {@link acquire}.
   */
  tryAcquire(): boolean;

  /**
   * Asynchronously acquires the ability to proceed.
   *
   * @param options - Optional {@link AcquireOptions} to control behavior.
   * @returns A promise that resolves once permission is granted.
   * @throws An `AbortError` if the signal is aborted before acquisition.
   * @throws A {@link TimeoutError} if the wait time exceeds {@link AcquireOptions.timeout}.
   */
  acquire(options?: AcquireOptions): Promise<void>;
}
