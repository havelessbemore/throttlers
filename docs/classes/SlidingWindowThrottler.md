[**throttlers**](../README.md)

***

[throttlers](../globals.md) / SlidingWindowThrottler

# Class: SlidingWindowThrottler

Defined in: [src/slidingWindowThrottler.ts:37](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/slidingWindowThrottler.ts#L37)

A throttler that uses the sliding window algorithm.

This throttler spreads requests across a moving time window,
tracking the timestamps of accepted requests and ensuring
no more than a fixed number occur within any given interval.

## Implements

- [`Throttler`](../interfaces/Throttler.md)

## Constructors

### Constructor

> **new SlidingWindowThrottler**(`__namedParameters`): `SlidingWindowThrottler`

Defined in: [src/slidingWindowThrottler.ts:61](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/slidingWindowThrottler.ts#L61)

#### Parameters

##### \_\_namedParameters

[`SlidingWindowThrottlerConfig`](../interfaces/SlidingWindowThrottlerConfig.md)

#### Returns

`SlidingWindowThrottler`

## Properties

### duration

> `readonly` **duration**: `number`

Defined in: [src/slidingWindowThrottler.ts:41](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/slidingWindowThrottler.ts#L41)

The size of the window in milliseconds.

***

### limit

> `readonly` **limit**: `number`

Defined in: [src/slidingWindowThrottler.ts:51](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/slidingWindowThrottler.ts#L51)

The number of requests allowed per window.

## Methods

### tryAcquire()

> `protected` **tryAcquire**(): `number`

Defined in: [src/slidingWindowThrottler.ts:86](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/slidingWindowThrottler.ts#L86)

Attempts to acquire permission to proceed with a request.

If the number of requests within the sliding window is
below the limit, the request is accepted and its expiration
timestamp (i.e. when it falls out of the window) is
recorded in the current slot.

If the limit has been reached, the expiration time of the
oldest request is returned to indicate how long the caller
should wait before retrying.

#### Returns

`number`

***

### tryWait()

> **tryWait**(): `boolean`

Defined in: [src/slidingWindowThrottler.ts:98](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/slidingWindowThrottler.ts#L98)

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

Defined in: [src/slidingWindowThrottler.ts:102](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/slidingWindowThrottler.ts#L102)

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
