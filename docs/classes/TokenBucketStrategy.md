[**throttlers**](../README.md)

***

[throttlers](../globals.md) / TokenBucketStrategy

# Class: TokenBucketStrategy

Defined in: [src/strategies/tokenBucketStrategy.ts:44](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/tokenBucketStrategy.ts#L44)

A throttler that uses the token bucket algorithm.

Allows requests to be made at a steady rate, while
still supporting occasional bursts.

Each request consumes one token. Tokens are added
continuously over time based on the configured refill rate.

## Implements

- [`ThrottlerStrategy`](../interfaces/ThrottlerStrategy.md)

## Constructors

### Constructor

> **new TokenBucketStrategy**(`__namedParameters`): `TokenBucketStrategy`

Defined in: [src/strategies/tokenBucketStrategy.ts:65](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/tokenBucketStrategy.ts#L65)

#### Parameters

##### \_\_namedParameters

[`TokenBucketConfig`](../interfaces/TokenBucketConfig.md)

#### Returns

`TokenBucketStrategy`

## Properties

### capacity

> `readonly` **capacity**: `number`

Defined in: [src/strategies/tokenBucketStrategy.ts:48](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/tokenBucketStrategy.ts#L48)

Maximum number of tokens in the bucket.

***

### refillRate

> `readonly` **refillRate**: `number`

Defined in: [src/strategies/tokenBucketStrategy.ts:58](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/tokenBucketStrategy.ts#L58)

Rate at which tokens are added, per second.

## Methods

### tryAcquire()

> **tryAcquire**(): [`TryAcquireResult`](../type-aliases/TryAcquireResult.md)

Defined in: [src/strategies/tokenBucketStrategy.ts:89](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/tokenBucketStrategy.ts#L89)

Attempts to acquire permission to proceed with a request.

First, the number of refilled tokens since the last check
is calculated and the bucket's level is updated accordingly.

If at least one token is available, the request is accepted.

Otherwise, returns the timestamp when a token will become
available to allow the request.

#### Returns

[`TryAcquireResult`](../type-aliases/TryAcquireResult.md)

#### Implementation of

[`ThrottlerStrategy`](../interfaces/ThrottlerStrategy.md).[`tryAcquire`](../interfaces/ThrottlerStrategy.md#tryacquire)
