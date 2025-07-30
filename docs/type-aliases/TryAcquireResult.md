[**throttlers**](../README.md)

***

[throttlers](../globals.md) / TryAcquireResult

# Type Alias: TryAcquireResult

> **TryAcquireResult** = [`TryAcquireSuccess`](../interfaces/TryAcquireSuccess.md) \| [`TryAcquireFailure`](../interfaces/TryAcquireFailure.md)

Defined in: [src/types/throttlerStrategy.ts:36](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/types/throttlerStrategy.ts#L36)

Result of an attempt to acquire a permit.

Discriminated union: either success or failure with a recommended retry delay.
