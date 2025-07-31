[**throttlers**](../README.md)

***

[throttlers](../globals.md) / ThrottlerStrategy

# Interface: ThrottlerStrategy

Defined in: [src/types/throttlerStrategy.ts:41](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/types/throttlerStrategy.ts#L41)

Strategy interface defining throttler behavior.

## Methods

### tryAcquire()

> **tryAcquire**(): [`TryAcquireResult`](../type-aliases/TryAcquireResult.md)

Defined in: [src/types/throttlerStrategy.ts:47](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/types/throttlerStrategy.ts#L47)

Attempts to acquire a permit.

#### Returns

[`TryAcquireResult`](../type-aliases/TryAcquireResult.md)

A [result](../type-aliases/TryAcquireResult.md) indicating success or failure.
