[**throttlers**](../README.md)

***

[throttlers](../globals.md) / ThrottlerStrategy

# Interface: ThrottlerStrategy

Defined in: [src/types/throttlerStrategy.ts:41](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/types/throttlerStrategy.ts#L41)

Strategy interface defining throttler behavior.

## Methods

### tryAcquire()

> **tryAcquire**(): [`TryAcquireResult`](../type-aliases/TryAcquireResult.md)

Defined in: [src/types/throttlerStrategy.ts:47](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/types/throttlerStrategy.ts#L47)

Attempts to acquire a permit.

#### Returns

[`TryAcquireResult`](../type-aliases/TryAcquireResult.md)

A [result](../type-aliases/TryAcquireResult.md) indicating success or failure.
