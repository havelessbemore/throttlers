[**throttlers**](../README.md)

***

[throttlers](../globals.md) / FixedWindowStrategy

# Class: FixedWindowStrategy

Defined in: [src/strategies/fixedWindowStrategy.ts:41](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/fixedWindowStrategy.ts#L41)

A throttler that uses the fixed window algorithm.

This throttler counts the number of requests within
each fixed-duration window. Once the limit is reached,
additional requests are delayed until future windows.

Note: This approach can cause bursts of traffic at
window boundaries.

## Implements

- [`ThrottlerStrategy`](../interfaces/ThrottlerStrategy.md)

## Constructors

### Constructor

> **new FixedWindowStrategy**(`__namedParameters`): `FixedWindowStrategy`

Defined in: [src/strategies/fixedWindowStrategy.ts:62](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/fixedWindowStrategy.ts#L62)

#### Parameters

##### \_\_namedParameters

[`FixedWindowConfig`](../interfaces/FixedWindowConfig.md)

#### Returns

`FixedWindowStrategy`

## Properties

### duration

> `readonly` **duration**: `number`

Defined in: [src/strategies/fixedWindowStrategy.ts:45](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/fixedWindowStrategy.ts#L45)

The size of the window in milliseconds.

***

### limit

> `readonly` **limit**: `number`

Defined in: [src/strategies/fixedWindowStrategy.ts:50](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/fixedWindowStrategy.ts#L50)

The number of requests allowed per window.

## Methods

### tryAcquire()

> **tryAcquire**(): [`TryAcquireResult`](../type-aliases/TryAcquireResult.md)

Defined in: [src/strategies/fixedWindowStrategy.ts:84](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/fixedWindowStrategy.ts#L84)

Attempts to acquire permission to proceed with a request.

If the current window has capacity, returns <= 0.

Otherwise, returns the number of milliseconds to wait
before the caller should retry.

#### Returns

[`TryAcquireResult`](../type-aliases/TryAcquireResult.md)

#### Implementation of

[`ThrottlerStrategy`](../interfaces/ThrottlerStrategy.md).[`tryAcquire`](../interfaces/ThrottlerStrategy.md#tryacquire)
