[**throttlers**](../README.md)

***

[throttlers](../globals.md) / FixedWindowThrottler

# Class: FixedWindowThrottler

Defined in: [src/fixedWindowThrottler.ts:40](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/fixedWindowThrottler.ts#L40)

A throttler that uses the fixed window algorithm.

This throttler counts the number of requests within
each fixed-duration window. Once the limit is reached,
additional requests are delayed until future windows.

Note: This approach can cause bursts of traffic at
window boundaries.

## Implements

- [`Throttler`](../interfaces/Throttler.md)

## Constructors

### Constructor

> **new FixedWindowThrottler**(`__namedParameters`): `FixedWindowThrottler`

Defined in: [src/fixedWindowThrottler.ts:61](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/fixedWindowThrottler.ts#L61)

#### Parameters

##### \_\_namedParameters

[`FixedWindowThrottlerConfig`](../interfaces/FixedWindowThrottlerConfig.md)

#### Returns

`FixedWindowThrottler`

## Properties

### duration

> `readonly` **duration**: `number`

Defined in: [src/fixedWindowThrottler.ts:44](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/fixedWindowThrottler.ts#L44)

The size of the window in milliseconds.

***

### limit

> `readonly` **limit**: `number`

Defined in: [src/fixedWindowThrottler.ts:49](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/fixedWindowThrottler.ts#L49)

The number of requests allowed per window.

## Methods

### tryAcquire()

> `protected` **tryAcquire**(): `number`

Defined in: [src/fixedWindowThrottler.ts:83](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/fixedWindowThrottler.ts#L83)

Attempts to acquire permission to proceed with a request.

If the current window has capacity, returns <= 0.

Otherwise, returns the number of milliseconds to wait
before the caller should retry.

#### Returns

`number`

***

### tryWait()

> **tryWait**(): `boolean`

Defined in: [src/fixedWindowThrottler.ts:99](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/fixedWindowThrottler.ts#L99)

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

Defined in: [src/fixedWindowThrottler.ts:103](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/fixedWindowThrottler.ts#L103)

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
