[**throttlers**](../README.md)

***

[throttlers](../globals.md) / StrategyThrottler

# Class: StrategyThrottler

Defined in: [src/strategyThrottler.ts:10](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/strategyThrottler.ts#L10)

An interface for throttlers that regulate the pacing
of operations to conform to a specified rate.

## Extended by

- [`FixedWindowThrottler`](FixedWindowThrottler.md)
- [`LeakyBucketThrottler`](LeakyBucketThrottler.md)
- [`LinearThrottler`](LinearThrottler.md)
- [`SlidingWindowThrottler`](SlidingWindowThrottler.md)
- [`TokenBucketThrottler`](TokenBucketThrottler.md)

## Implements

- [`Throttler`](../interfaces/Throttler.md)

## Constructors

### Constructor

> **new StrategyThrottler**(`__namedParameters`): `StrategyThrottler`

Defined in: [src/strategyThrottler.ts:13](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/strategyThrottler.ts#L13)

#### Parameters

##### \_\_namedParameters

[`StrategyThrottlerConfig`](../interfaces/StrategyThrottlerConfig.md)

#### Returns

`StrategyThrottler`

## Properties

### strategy

> `readonly` **strategy**: [`ThrottlerStrategy`](../interfaces/ThrottlerStrategy.md)

Defined in: [src/strategyThrottler.ts:11](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/strategyThrottler.ts#L11)

## Methods

### acquire()

> **acquire**(`options`): `Promise`\<`void`\>

Defined in: [src/strategyThrottler.ts:21](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/strategyThrottler.ts#L21)

Asynchronously acquires the ability to proceed.

#### Parameters

##### options

[`AcquireOptions`](../interfaces/AcquireOptions.md) = `{}`

Optional [AcquireOptions](../interfaces/AcquireOptions.md) to control behavior.

#### Returns

`Promise`\<`void`\>

A promise that resolves once permission is granted.

#### Throws

An `AbortError` if the signal is aborted before acquisition.

#### Throws

A [TimeoutError](TimeoutError.md) if the wait time exceeds [AcquireOptions.timeout](../interfaces/AcquireOptions.md#timeout).

#### Implementation of

[`Throttler`](../interfaces/Throttler.md).[`acquire`](../interfaces/Throttler.md#acquire)

***

### tryAcquire()

> **tryAcquire**(): `boolean`

Defined in: [src/strategyThrottler.ts:17](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/strategyThrottler.ts#L17)

Attempts to acquire permission immediately.

#### Returns

`boolean`

`true` if allowed immediately, `false` otherwise.
If `false`, the caller may retry later or call [acquire](../interfaces/Throttler.md#acquire).

#### Implementation of

[`Throttler`](../interfaces/Throttler.md).[`tryAcquire`](../interfaces/Throttler.md#tryacquire)
