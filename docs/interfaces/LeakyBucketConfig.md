[**throttlers**](../README.md)

***

[throttlers](../globals.md) / LeakyBucketConfig

# Interface: LeakyBucketConfig

Defined in: [src/strategies/leakyBucketStrategy.ts:17](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/leakyBucketStrategy.ts#L17)

Configuration options for creating a [LeakyBucketStrategy](../classes/LeakyBucketStrategy.md).

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

Defined in: [src/strategies/leakyBucketStrategy.ts:24](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/leakyBucketStrategy.ts#L24)

Maximum number of tokens the bucket can hold.

This defines the burst capacity. Requests beyond this
limit are throttled until enough leakage has occurred.

***

### leakRate

> **leakRate**: `number`

Defined in: [src/strategies/leakyBucketStrategy.ts:31](https://github.com/havelessbemore/throttlers/blob/3e64dbc7f42ad7431d8e4aaaafc9787d4a004f91/src/strategies/leakyBucketStrategy.ts#L31)

Rate at which tokens leak per second.

A higher rate allows faster throughput.
