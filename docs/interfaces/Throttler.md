[**throttlers**](../README.md)

***

[throttlers](../globals.md) / Throttler

# Interface: Throttler

Defined in: [src/types/throttler.ts:25](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/types/throttler.ts#L25)

An interface for throttlers that regulate the pacing
of operations to conform to a specified rate.

## Methods

### acquire()

> **acquire**(`options?`): `Promise`\<`void`\>

Defined in: [src/types/throttler.ts:42](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/types/throttler.ts#L42)

Asynchronously acquires the ability to proceed.

#### Parameters

##### options?

[`AcquireOptions`](AcquireOptions.md)

Optional [AcquireOptions](AcquireOptions.md) to control behavior.

#### Returns

`Promise`\<`void`\>

A promise that resolves once permission is granted.

#### Throws

An `AbortError` if the signal is aborted before acquisition.

#### Throws

A [TimeoutError](../classes/TimeoutError.md) if the wait time exceeds [AcquireOptions.timeout](AcquireOptions.md#timeout).

***

### tryAcquire()

> **tryAcquire**(): `boolean`

Defined in: [src/types/throttler.ts:32](https://github.com/havelessbemore/throttlers/blob/71b6926c68e5c43e70c3be251f905b2bb4d30de8/src/types/throttler.ts#L32)

Attempts to acquire permission immediately.

#### Returns

`boolean`

`true` if allowed immediately, `false` otherwise.
If `false`, the caller may retry later or call [acquire](#acquire).
