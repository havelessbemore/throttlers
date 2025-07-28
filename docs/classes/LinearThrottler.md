[**throttlers**](../README.md)

***

[throttlers](../globals.md) / LinearThrottler

# Class: LinearThrottler

Defined in: [src/linearThrottler.ts:29](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/linearThrottler.ts#L29)

A throttler that enforces a fixed delay between requests.

This throttler ensures that each request occurs at least
`duration` milliseconds after the previous one, providing
consistent pacing without bursts.

## Implements

- [`Throttler`](../interfaces/Throttler.md)

## Constructors

### Constructor

> **new LinearThrottler**(`__namedParameters`): `LinearThrottler`

Defined in: [src/linearThrottler.ts:40](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/linearThrottler.ts#L40)

#### Parameters

##### \_\_namedParameters

[`LinearThrottlerConfig`](../interfaces/LinearThrottlerConfig.md)

#### Returns

`LinearThrottler`

## Properties

### duration

> `readonly` **duration**: `number`

Defined in: [src/linearThrottler.ts:33](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/linearThrottler.ts#L33)

The minimum duration between requests, in milliseconds.

## Methods

### tryAcquire()

> `protected` **tryAcquire**(): `number`

Defined in: [src/linearThrottler.ts:57](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/linearThrottler.ts#L57)

Attempts to acquire permission to proceed with the operation.

Allows the request if the current time is past `slot`.

Otherwise, returns the timestamp when the next
request is allowed to indicate how long the caller
should wait before retrying.

#### Returns

`number`

***

### tryWait()

> **tryWait**(): `boolean`

Defined in: [src/linearThrottler.ts:68](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/linearThrottler.ts#L68)

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

Defined in: [src/linearThrottler.ts:72](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/linearThrottler.ts#L72)

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
