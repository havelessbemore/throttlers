[**throttlers**](../README.md)

***

[throttlers](../globals.md) / LeakyBucketThrottlerConfig

# Interface: LeakyBucketThrottlerConfig

Defined in: [src/leakyBucketThrottler.ts:16](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/leakyBucketThrottler.ts#L16)

Configuration options for creating a [LeakyBucketThrottler](../classes/LeakyBucketThrottler.md).

## Example

```ts
// Allow bursts of up to 10 requests, with a drain of 5 per second
{
  capacity: 10,
  leakRate: 5
}
```

## Properties

### capacity

> **capacity**: `number`

Defined in: [src/leakyBucketThrottler.ts:23](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/leakyBucketThrottler.ts#L23)

Maximum number of tokens the bucket can hold.

This defines the burst capacity. Requests beyond this
limit are throttled until enough leakage has occurred.

***

### leakRate

> **leakRate**: `number`

Defined in: [src/leakyBucketThrottler.ts:30](https://github.com/havelessbemore/throttlers/blob/0085c42010e9779979ae29dd951b097a22da3fcd/src/leakyBucketThrottler.ts#L30)

Rate at which tokens leak per second.

A higher rate allows faster throughput.
