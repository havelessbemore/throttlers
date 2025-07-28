[**throttlers**](../README.md)

***

[throttlers](../globals.md) / TokenBucketThrottlerConfig

# Interface: TokenBucketThrottlerConfig

Defined in: [src/tokenBucketThrottler.ts:17](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/tokenBucketThrottler.ts#L17)

Configuration options for creating a [TokenBucketThrottler](../classes/TokenBucketThrottler.md).

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

Defined in: [src/tokenBucketThrottler.ts:24](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/tokenBucketThrottler.ts#L24)

Maximum number of tokens the bucket can hold.

This defines the burst capacity. Requests beyond this
limit are throttled until enough refill has occurred.

***

### refillRate

> **refillRate**: `number`

Defined in: [src/tokenBucketThrottler.ts:31](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/tokenBucketThrottler.ts#L31)

Rate at which tokens refill per second.

A higher rate allows faster throughput.
