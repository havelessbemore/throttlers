[**throttlers**](../README.md)

***

[throttlers](../globals.md) / FixedWindowConfig

# Interface: FixedWindowConfig

Defined in: [src/strategies/fixedWindowStrategy.ts:17](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/fixedWindowStrategy.ts#L17)

Configuration options for creating a [FixedWindowStrategy](../classes/FixedWindowStrategy.md).

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

Defined in: [src/strategies/fixedWindowStrategy.ts:21](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/fixedWindowStrategy.ts#L21)

The size of the window in milliseconds.

***

### limit

> **limit**: `number`

Defined in: [src/strategies/fixedWindowStrategy.ts:28](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/fixedWindowStrategy.ts#L28)

The number of requests allowed per window.

Requests above this limit will be delayed.
