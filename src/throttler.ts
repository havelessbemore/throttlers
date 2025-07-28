/**
 * Optional settings that control the behavior of `Throtter.wait`
 */
export interface ThrottlerWaitOptions {
  /**
   * An {@link AbortSignal} that allows the wait to be cancelled early.
   *
   * If the signal is already aborted or is aborted before the wait completes,
   * an `AbortError` is thrown.
   */
  signal?: AbortSignal;

  /**
   * Maximum total duration to wait before timing out, in milliseconds.
   *
   * If the wait does not complete within this duration,
   * a {@link TimeoutError} is thrown.
   */
  timeout?: number;
}

/**
 * An interface for throttlers that regulate the pacing
 * of operations to conform to a specified rate.
 */
export interface Throttler {
  /**
   * Attempts to proceed immediately without waiting.
   *
   * Performs a non-blocking check to determine whether the operation
   * can be executed immediately based on the throttler's state.
   *
   * @returns `true` if the operation can proceed immediately,
   * `false` if it must be delayed.
   */
  tryWait(): boolean;

  /**
   * Waits until the throttler permits execution based on its rate-limiting logic.
   *
   * Supports cancellation via `AbortSignal`, timeouts, and custom retry behavior.
   *
   * @param options Optional controls:
   *   - `signal`: aborts the wait early and throws `AbortError`.
   *   - `timeout`: maximum total time to wait before throwing {@link TimeoutError}.
   *
   * @returns A promise that resolves after waiting completes, or rejects if cancelled.
   *
   * @throws An `AbortError` if the provided signal is aborted before resolution.
   * @throws A {@link TimeoutError} if the wait exceeds the given timeout.
   */
  wait(options?: ThrottlerWaitOptions): Promise<void>;
}
