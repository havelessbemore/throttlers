[**throttlers**](../README.md)

***

[throttlers](../globals.md) / LeakyBucketStrategy

# Class: LeakyBucketStrategy

Defined in: [src/strategies/leakyBucketStrategy.ts:43](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/strategies/leakyBucketStrategy.ts#L43)

A throttler that uses the leaky bucket algorithm.

Tokens are added to a "bucket" which drains at a steady rate
defined by `leakRate`. If the bucket overflows (`capacity` exceeded),
further requests are throttled until enough leakage has occurred.

This method smooths bursts over time, providing a steady output rate.

## Implements

- [`ThrottlerStrategy`](../interfaces/ThrottlerStrategy.md)

## Constructors

### Constructor

> **new LeakyBucketStrategy**(`__namedParameters`): `LeakyBucketStrategy`

Defined in: [src/strategies/leakyBucketStrategy.ts:63](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/strategies/leakyBucketStrategy.ts#L63)

#### Parameters

##### \_\_namedParameters

[`LeakyBucketConfig`](../interfaces/LeakyBucketConfig.md)

#### Returns

`LeakyBucketStrategy`

## Properties

### capacity

> `readonly` **capacity**: `number`

Defined in: [src/strategies/leakyBucketStrategy.ts:47](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/strategies/leakyBucketStrategy.ts#L47)

Maximum capacity of the bucket.

***

### leakRate

> `readonly` **leakRate**: `number`

Defined in: [src/strategies/leakyBucketStrategy.ts:56](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/strategies/leakyBucketStrategy.ts#L56)

Rate at which tokens are leaked, per second.

## Methods

### tryAcquire()

> **tryAcquire**(): [`TryAcquireResult`](../type-aliases/TryAcquireResult.md)

Defined in: [src/strategies/leakyBucketStrategy.ts:87](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/strategies/leakyBucketStrategy.ts#L87)

Attempts to acquire permission to proceed with a request.

First, the number of leaked tokens since the last check
is calculated and the bucket's level is updated accordingly.

If the bucket has capacity, the request is accepted.

Otherwise, returns the timestamp of when enough leakage
will occur to allow the request.

#### Returns

[`TryAcquireResult`](../type-aliases/TryAcquireResult.md)

#### Implementation of

[`ThrottlerStrategy`](../interfaces/ThrottlerStrategy.md).[`tryAcquire`](../interfaces/ThrottlerStrategy.md#tryacquire)
