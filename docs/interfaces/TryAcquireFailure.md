[**throttlers**](../README.md)

***

[throttlers](../globals.md) / TryAcquireFailure

# Interface: TryAcquireFailure

Defined in: [src/types/throttlerStrategy.ts:19](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/types/throttlerStrategy.ts#L19)

Indicates a failed attempt to acquire a permit.

## Properties

### retryAfterMs

> **retryAfterMs**: `number`

Defined in: [src/types/throttlerStrategy.ts:23](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/types/throttlerStrategy.ts#L23)

Recommended wait time before the next attempt, in milliseconds.

***

### success

> **success**: `false`

Defined in: [src/types/throttlerStrategy.ts:28](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/types/throttlerStrategy.ts#L28)

Always `false` when acquisition fails.
