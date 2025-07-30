[**throttlers**](../README.md)

***

[throttlers](../globals.md) / AcquireOptions

# Interface: AcquireOptions

Defined in: [src/types/throttler.ts:7](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/types/throttler.ts#L7)

Options to control the behavior of [Throttler.acquire](Throttler.md#acquire).

## Properties

### signal?

> `optional` **signal**: [`AbortSignal`](#)

Defined in: [src/types/throttler.ts:11](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/types/throttler.ts#L11)

An [AbortSignal](#) that allows cancellation.

***

### timeout?

> `optional` **timeout**: `number`

Defined in: [src/types/throttler.ts:18](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/types/throttler.ts#L18)

Maximum duration to wait before timing out, in milliseconds.

If acqisition exceeds this duration, a [TimeoutError](../classes/TimeoutError.md) is thrown.
