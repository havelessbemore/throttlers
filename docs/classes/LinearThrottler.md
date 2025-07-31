[**throttlers**](../README.md)

***

[throttlers](../globals.md) / LinearThrottler

# Class: LinearThrottler

Defined in: [src/strategies/linearStrategy.ts:70](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/linearStrategy.ts#L70)

An interface for throttlers that regulate the pacing
of operations to conform to a specified rate.

## Extends

- [`StrategyThrottler`](StrategyThrottler.md)

## Constructors

### Constructor

> **new LinearThrottler**(`config`): `LinearThrottler`

Defined in: [src/strategies/linearStrategy.ts:71](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/linearStrategy.ts#L71)

#### Parameters

##### config

[`LinearConfig`](../interfaces/LinearConfig.md)

#### Returns

`LinearThrottler`

#### Overrides

[`StrategyThrottler`](StrategyThrottler.md).[`constructor`](StrategyThrottler.md#constructor)

## Properties

### strategy

> `readonly` **strategy**: [`ThrottlerStrategy`](../interfaces/ThrottlerStrategy.md)

Defined in: [src/strategyThrottler.ts:11](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategyThrottler.ts#L11)

#### Inherited from

[`StrategyThrottler`](StrategyThrottler.md).[`strategy`](StrategyThrottler.md#strategy)

## Methods

### acquire()

> **acquire**(`options`): `Promise`\<`void`\>

Defined in: [src/strategyThrottler.ts:21](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategyThrottler.ts#L21)

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

#### Inherited from

[`StrategyThrottler`](StrategyThrottler.md).[`acquire`](StrategyThrottler.md#acquire)

***

### tryAcquire()

> **tryAcquire**(): `boolean`

Defined in: [src/strategyThrottler.ts:17](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategyThrottler.ts#L17)

Attempts to acquire permission immediately.

#### Returns

`boolean`

`true` if allowed immediately, `false` otherwise.
If `false`, the caller may retry later or call [acquire](../interfaces/Throttler.md#acquire).

#### Inherited from

[`StrategyThrottler`](StrategyThrottler.md).[`tryAcquire`](StrategyThrottler.md#tryacquire)
