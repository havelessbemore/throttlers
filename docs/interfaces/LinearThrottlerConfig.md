[**throttlers**](../README.md)

***

[throttlers](../globals.md) / LinearThrottlerConfig

# Interface: LinearThrottlerConfig

Defined in: [src/linearThrottler.ts:15](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/linearThrottler.ts#L15)

Configuration options for creating a [LinearThrottler](../classes/LinearThrottler.md).

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

Defined in: [src/linearThrottler.ts:19](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/linearThrottler.ts#L19)

The minimum duration between requests, in milliseconds.
