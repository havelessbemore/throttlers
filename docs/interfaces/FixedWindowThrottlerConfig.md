[**throttlers**](../README.md)

***

[throttlers](../globals.md) / FixedWindowThrottlerConfig

# Interface: FixedWindowThrottlerConfig

Defined in: [src/fixedWindowThrottler.ts:16](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/fixedWindowThrottler.ts#L16)

Configuration options for creating a [FixedWindowThrottler](../classes/FixedWindowThrottler.md).

## Example

```ts
// 5 requests per second
{
 duration: 1000, // milliseconds
 limit: 5
}
```

## Properties

### duration

> **duration**: `number`

Defined in: [src/fixedWindowThrottler.ts:20](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/fixedWindowThrottler.ts#L20)

The size of the window in milliseconds.

***

### limit

> **limit**: `number`

Defined in: [src/fixedWindowThrottler.ts:27](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/fixedWindowThrottler.ts#L27)

The number of requests allowed per window.

Requests above this limit will be delayed.
