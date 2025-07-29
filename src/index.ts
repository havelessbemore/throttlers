export { TimeoutError } from "wait-utils";

export {
  FixedWindowStrategy,
  type FixedWindowStrategyConfig,
} from "./strategies/fixedWindowStrategy";

export {
  LeakyBucketStrategy,
  type LeakyBucketStrategyConfig,
} from "./strategies/leakyBucketStrategy";

export {
  LinearStrategy,
  type LinearStrategyConfig,
} from "./strategies/linearStrategy";

export {
  SlidingWindowStrategy,
  type SlidingWindowStrategyConfig,
} from "./strategies/slidingWindowStrategy";

export {
  TokenBucketStrategy,
  type TokenBucketStrategyConfig,
} from "./strategies/tokenBucketStrategy";

export type { AcquireOptions, Throttler } from "./types/throttler";

export type {
  TryAcquireFailure,
  TryAcquireResult,
  TryAcquireSuccess,
  ThrottlerStrategy,
} from "./types/throttlerStrategy";

export {
  StrategyThrottler,
  type StrategyThrottlerConfig,
} from "./strategyThrottler";
