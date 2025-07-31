[**throttlers**](../README.md)

***

[throttlers](../globals.md) / LinearConfig

# Interface: LinearConfig

Defined in: [src/strategies/linearStrategy.ts:16](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/linearStrategy.ts#L16)

Configuration options for creating a [LinearStrategy](../classes/LinearStrategy.md).

## Example

```ts
// Allow one request every 500 milliseconds
{
 duration: 500
}
```

## Properties

### duration

> **duration**: `number`

Defined in: [src/strategies/linearStrategy.ts:20](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/linearStrategy.ts#L20)

The minimum duration between requests, in milliseconds.
