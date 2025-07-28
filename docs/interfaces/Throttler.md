[**throttlers**](../README.md)

***

[throttlers](../globals.md) / Throttler

# Interface: Throttler

Defined in: [src/throttler.ts:26](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/throttler.ts#L26)

An interface for throttlers that regulate the pacing
of operations to conform to a specified rate.

## Methods

### tryWait()

> **tryWait**(): `boolean`

Defined in: [src/throttler.ts:36](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/throttler.ts#L36)

Attempts to proceed immediately without waiting.

Performs a non-blocking check to determine whether the operation
can be executed immediately based on the throttler's state.

#### Returns

`boolean`

`true` if the operation can proceed immediately,
`false` if it must be delayed.

***

### wait()

> **wait**(`options?`): `Promise`\<`void`\>

Defined in: [src/throttler.ts:52](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/throttler.ts#L52)

Waits until the throttler permits execution based on its rate-limiting logic.

Supports cancellation via `AbortSignal`, timeouts, and custom retry behavior.

#### Parameters

##### options?

[`ThrottlerWaitOptions`](ThrottlerWaitOptions.md)

Optional controls:
  - `signal`: aborts the wait early and throws `AbortError`.
  - `timeout`: maximum total time to wait before throwing [TimeoutError](../classes/TimeoutError.md).

#### Returns

`Promise`\<`void`\>

A promise that resolves after waiting completes, or rejects if cancelled.

#### Throws

An `AbortError` if the provided signal is aborted before resolution.

#### Throws

A [TimeoutError](../classes/TimeoutError.md) if the wait exceeds the given timeout.
