[**throttlers**](../README.md)

***

[throttlers](../globals.md) / TokenBucketConfig

# Interface: TokenBucketConfig

Defined in: [src/strategies/tokenBucketStrategy.ts:18](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/tokenBucketStrategy.ts#L18)

Configuration options for creating a [TokenBucketStrategy](../classes/TokenBucketStrategy.md).

## Example

```ts
// Allow bursts of up to 10 requests, refilling at 5 per second
{
 capacity: 10,
 refillRate: 5
}
```

## Properties

### capacity

> **capacity**: `number`

Defined in: [src/strategies/tokenBucketStrategy.ts:25](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/tokenBucketStrategy.ts#L25)

Maximum number of tokens the bucket can hold.

This defines the burst capacity. Requests beyond this
limit are throttled until enough refill has occurred.

***

### refillRate

> **refillRate**: `number`

Defined in: [src/strategies/tokenBucketStrategy.ts:32](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/tokenBucketStrategy.ts#L32)

Rate at which tokens refill per second.

A higher rate allows faster throughput.
