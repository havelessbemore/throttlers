[**throttlers**](../README.md)

***

[throttlers](../globals.md) / SlidingWindowStrategy

# Class: SlidingWindowStrategy

Defined in: [src/strategies/slidingWindowStrategy.ts:38](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/slidingWindowStrategy.ts#L38)

A throttler that uses the sliding window algorithm.

This throttler spreads requests across a moving time window,
tracking the timestamps of accepted requests and ensuring
no more than a fixed number occur within any given interval.

## Implements

- [`ThrottlerStrategy`](../interfaces/ThrottlerStrategy.md)

## Constructors

### Constructor

> **new SlidingWindowStrategy**(`__namedParameters`): `SlidingWindowStrategy`

Defined in: [src/strategies/slidingWindowStrategy.ts:62](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/slidingWindowStrategy.ts#L62)

#### Parameters

##### \_\_namedParameters

[`SlidingWindowConfig`](../interfaces/SlidingWindowConfig.md)

#### Returns

`SlidingWindowStrategy`

## Properties

### duration

> `readonly` **duration**: `number`

Defined in: [src/strategies/slidingWindowStrategy.ts:42](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/slidingWindowStrategy.ts#L42)

The size of the window in milliseconds.

***

### limit

> `readonly` **limit**: `number`

Defined in: [src/strategies/slidingWindowStrategy.ts:52](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/slidingWindowStrategy.ts#L52)

The number of requests allowed per window.

## Methods

### tryAcquire()

> **tryAcquire**(): [`TryAcquireResult`](../type-aliases/TryAcquireResult.md)

Defined in: [src/strategies/slidingWindowStrategy.ts:87](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/slidingWindowStrategy.ts#L87)

Attempts to acquire permission to proceed with a request.

If the number of requests within the sliding window is
below the limit, the request is accepted and its expiration
timestamp (i.e. when it falls out of the window) is
recorded in the current slot.

If the limit has been reached, the expiration time of the
oldest request is returned to indicate how long the caller
should wait before retrying.

#### Returns

[`TryAcquireResult`](../type-aliases/TryAcquireResult.md)

#### Implementation of

[`ThrottlerStrategy`](../interfaces/ThrottlerStrategy.md).[`tryAcquire`](../interfaces/ThrottlerStrategy.md#tryacquire)
