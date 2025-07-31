[**throttlers**](../README.md)

***

[throttlers](../globals.md) / TryAcquireResult

# Type Alias: TryAcquireResult

> **TryAcquireResult** = [`TryAcquireSuccess`](../interfaces/TryAcquireSuccess.md) \| [`TryAcquireFailure`](../interfaces/TryAcquireFailure.md)

Defined in: [src/types/throttlerStrategy.ts:36](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/types/throttlerStrategy.ts#L36)

Result of an attempt to acquire a permit.

Discriminated union: either success or failure with a recommended retry delay.
