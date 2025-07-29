/**
 * Indicates a successful attempt to acquire a permit.
 */
export interface TryAcquireSuccess {
  /**
   * Not defined on successful acquisition.
   */
  retryAfterMs?: undefined;

  /**
   * Always `true` when acquisition is successful.
   */
  success: true;
}

/**
 * Indicates a failed attempt to acquire a permit.
 */
export interface TryAcquireFailure {
  /**
   * Recommended wait time before the next attempt, in milliseconds.
   */
  retryAfterMs: number;

  /**
   * Always `false` when acquisition fails.
   */
  success: false;
}

/**
 * Result of an attempt to acquire a permit.
 *
 * Discriminated union: either success or failure with a recommended retry delay.
 */
export type TryAcquireResult = TryAcquireSuccess | TryAcquireFailure;

/**
 * Strategy interface defining throttler behavior.
 */
export interface ThrottlerStrategy {
  /**
   * Attempts to acquire a permit.
   *
   * @returns A {@link TryAcquireResult | result} indicating success or failure.
   */
  tryAcquire(): TryAcquireResult;
}
