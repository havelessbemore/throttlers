[**throttlers**](../README.md)

***

[throttlers](../globals.md) / LinearStrategy

# Class: LinearStrategy

Defined in: [src/strategies/linearStrategy.ts:30](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/linearStrategy.ts#L30)

A throttler that enforces a fixed delay between requests.

This throttler ensures that each request occurs at least
`duration` milliseconds after the previous one, providing
consistent pacing without bursts.

## Implements

- [`ThrottlerStrategy`](../interfaces/ThrottlerStrategy.md)

## Constructors

### Constructor

> **new LinearStrategy**(`__namedParameters`): `LinearStrategy`

Defined in: [src/strategies/linearStrategy.ts:41](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/linearStrategy.ts#L41)

#### Parameters

##### \_\_namedParameters

[`LinearConfig`](../interfaces/LinearConfig.md)

#### Returns

`LinearStrategy`

## Properties

### duration

> `readonly` **duration**: `number`

Defined in: [src/strategies/linearStrategy.ts:34](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/linearStrategy.ts#L34)

The minimum duration between requests, in milliseconds.

## Methods

### tryAcquire()

> **tryAcquire**(): [`TryAcquireResult`](../type-aliases/TryAcquireResult.md)

Defined in: [src/strategies/linearStrategy.ts:58](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/linearStrategy.ts#L58)

Attempts to acquire permission to proceed with the operation.

Allows the request if the current time is past `slot`.

Otherwise, returns the timestamp when the next
request is allowed to indicate how long the caller
should wait before retrying.

#### Returns

[`TryAcquireResult`](../type-aliases/TryAcquireResult.md)

#### Implementation of

[`ThrottlerStrategy`](../interfaces/ThrottlerStrategy.md).[`tryAcquire`](../interfaces/ThrottlerStrategy.md#tryacquire)
