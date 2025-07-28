[**throttlers**](../README.md)

***

[throttlers](../globals.md) / ThrottlerWaitOptions

# Interface: ThrottlerWaitOptions

Defined in: [src/throttler.ts:4](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/throttler.ts#L4)

Optional settings that control the behavior of `Throtter.wait`

## Properties

### signal?

> `optional` **signal**: [`AbortSignal`](#)

Defined in: [src/throttler.ts:11](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/throttler.ts#L11)

An [AbortSignal](#) that allows the wait to be cancelled early.

If the signal is already aborted or is aborted before the wait completes,
an `AbortError` is thrown.

***

### timeout?

> `optional` **timeout**: `number`

Defined in: [src/throttler.ts:19](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/throttler.ts#L19)

Maximum total duration to wait before timing out, in milliseconds.

If the wait does not complete within this duration,
a [TimeoutError](../classes/TimeoutError.md) is thrown.
