[**throttlers**](../README.md)

***

[throttlers](../globals.md) / TryAcquireSuccess

# Interface: TryAcquireSuccess

Defined in: [src/types/throttlerStrategy.ts:4](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/types/throttlerStrategy.ts#L4)

Indicates a successful attempt to acquire a permit.

## Properties

### retryAfterMs?

> `optional` **retryAfterMs**: `undefined`

Defined in: [src/types/throttlerStrategy.ts:8](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/types/throttlerStrategy.ts#L8)

Not defined on successful acquisition.

***

### success

> **success**: `true`

Defined in: [src/types/throttlerStrategy.ts:13](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/types/throttlerStrategy.ts#L13)

Always `true` when acquisition is successful.
