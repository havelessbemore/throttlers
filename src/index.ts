export { TimeoutError } from "wait-utils";

export {
  type FixedWindowConfig,
  FixedWindowStrategy,
  FixedWindowThrottler,
} from "./strategies/fixedWindowStrategy";

export {
  type LeakyBucketConfig,
  LeakyBucketStrategy,
  LeakyBucketThrottler,
} from "./strategies/leakyBucketStrategy";

export {
  type LinearConfig,
  LinearStrategy,
  LinearThrottler,
} from "./strategies/linearStrategy";

export {
  type SlidingWindowConfig,
  SlidingWindowStrategy,
  SlidingWindowThrottler,
} from "./strategies/slidingWindowStrategy";

export {
  type TokenBucketConfig,
  TokenBucketStrategy,
  TokenBucketThrottler,
} from "./strategies/tokenBucketStrategy";

export {
  StrategyThrottler,
  type StrategyThrottlerConfig,
} from "./strategyThrottler";

export type { AcquireOptions, Throttler } from "./types/throttler";

export type {
  TryAcquireFailure,
  TryAcquireResult,
  TryAcquireSuccess,
  ThrottlerStrategy,
} from "./types/throttlerStrategy";
