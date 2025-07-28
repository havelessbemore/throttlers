[**throttlers**](../README.md)

***

[throttlers](../globals.md) / LeakyBucketThrottler

# Class: LeakyBucketThrottler

Defined in: [src/leakyBucketThrottler.ts:42](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/leakyBucketThrottler.ts#L42)

A throttler that uses the leaky bucket algorithm.

Tokens are added to a "bucket" which drains at a steady rate
defined by `leakRate`. If the bucket overflows (`capacity` exceeded),
further requests are throttled until enough leakage has occurred.

This method smooths bursts over time, providing a steady output rate.

## Implements

- [`Throttler`](../interfaces/Throttler.md)

## Constructors

### Constructor

> **new LeakyBucketThrottler**(`__namedParameters`): `LeakyBucketThrottler`

Defined in: [src/leakyBucketThrottler.ts:62](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/leakyBucketThrottler.ts#L62)

#### Parameters

##### \_\_namedParameters

[`LeakyBucketThrottlerConfig`](../interfaces/LeakyBucketThrottlerConfig.md)

#### Returns

`LeakyBucketThrottler`

## Properties

### capacity

> `readonly` **capacity**: `number`

Defined in: [src/leakyBucketThrottler.ts:46](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/leakyBucketThrottler.ts#L46)

Maximum capacity of the bucket.

***

### leakRate

> `readonly` **leakRate**: `number`

Defined in: [src/leakyBucketThrottler.ts:55](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/leakyBucketThrottler.ts#L55)

Rate at which tokens are leaked, per second.

## Methods

### tryAcquire()

> `protected` **tryAcquire**(): `number`

Defined in: [src/leakyBucketThrottler.ts:86](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/leakyBucketThrottler.ts#L86)

Attempts to acquire permission to proceed with a request.

First, the number of leaked tokens since the last check
is calculated and the bucket's level is updated accordingly.

If the bucket has capacity, the request is accepted.

Otherwise, returns the timestamp of when enough leakage
will occur to allow the request.

#### Returns

`number`

***

### tryWait()

> **tryWait**(): `boolean`

Defined in: [src/leakyBucketThrottler.ts:107](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/leakyBucketThrottler.ts#L107)

Attempts to proceed immediately without waiting.

Performs a non-blocking check to determine whether the operation
can be executed immediately based on the throttler's state.

#### Returns

`boolean`

`true` if the operation can proceed immediately,
`false` if it must be delayed.

#### Implementation of

[`Throttler`](../interfaces/Throttler.md).[`tryWait`](../interfaces/Throttler.md#trywait)

***

### wait()

> **wait**(`options`): `Promise`\<`void`\>

Defined in: [src/leakyBucketThrottler.ts:111](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/leakyBucketThrottler.ts#L111)

Waits until the throttler permits execution based on its rate-limiting logic.

Supports cancellation via `AbortSignal`, timeouts, and custom retry behavior.

#### Parameters

##### options

[`ThrottlerWaitOptions`](../interfaces/ThrottlerWaitOptions.md) = `{}`

Optional controls:
  - `signal`: aborts the wait early and throws `AbortError`.
  - `timeout`: maximum total time to wait before throwing [TimeoutError](TimeoutError.md).

#### Returns

`Promise`\<`void`\>

A promise that resolves after waiting completes, or rejects if cancelled.

#### Throws

An `AbortError` if the provided signal is aborted before resolution.

#### Throws

A [TimeoutError](TimeoutError.md) if the wait exceeds the given timeout.

#### Implementation of

[`Throttler`](../interfaces/Throttler.md).[`wait`](../interfaces/Throttler.md#wait)
