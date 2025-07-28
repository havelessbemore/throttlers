[**throttlers**](../README.md)

***

[throttlers](../globals.md) / TokenBucketThrottler

# Class: TokenBucketThrottler

Defined in: [src/tokenBucketThrottler.ts:43](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/tokenBucketThrottler.ts#L43)

A throttler that uses the token bucket algorithm.

Allows requests to be made at a steady rate, while
still supporting occasional bursts.

Each request consumes one token. Tokens are added
continuously over time based on the configured refill rate.

## Implements

- [`Throttler`](../interfaces/Throttler.md)

## Constructors

### Constructor

> **new TokenBucketThrottler**(`__namedParameters`): `TokenBucketThrottler`

Defined in: [src/tokenBucketThrottler.ts:64](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/tokenBucketThrottler.ts#L64)

#### Parameters

##### \_\_namedParameters

[`TokenBucketThrottlerConfig`](../interfaces/TokenBucketThrottlerConfig.md)

#### Returns

`TokenBucketThrottler`

## Properties

### capacity

> `readonly` **capacity**: `number`

Defined in: [src/tokenBucketThrottler.ts:47](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/tokenBucketThrottler.ts#L47)

Maximum number of tokens in the bucket.

***

### refillRate

> `readonly` **refillRate**: `number`

Defined in: [src/tokenBucketThrottler.ts:57](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/tokenBucketThrottler.ts#L57)

Rate at which tokens are added, per second.

## Methods

### tryAcquire()

> `protected` **tryAcquire**(): `number`

Defined in: [src/tokenBucketThrottler.ts:88](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/tokenBucketThrottler.ts#L88)

Attempts to acquire permission to proceed with a request.

First, the number of refilled tokens since the last check
is calculated and the bucket's level is updated accordingly.

If at least one token is available, the request is accepted.

Otherwise, returns the timestamp when a token will become
available to allow the request.

#### Returns

`number`

***

### tryWait()

> **tryWait**(): `boolean`

Defined in: [src/tokenBucketThrottler.ts:109](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/tokenBucketThrottler.ts#L109)

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

Defined in: [src/tokenBucketThrottler.ts:113](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/tokenBucketThrottler.ts#L113)

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
