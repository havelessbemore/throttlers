import { poll } from "wait-utils";

import type { AcquireOptions, Throttler } from "./types/throttler";
import type { ThrottlerStrategy } from "./types/throttlerStrategy";

export interface StrategyThrottlerConfig {
  strategy: ThrottlerStrategy;
}

export class StrategyThrottler implements Throttler {
  readonly strategy: ThrottlerStrategy;

  constructor({ strategy }: StrategyThrottlerConfig) {
    this.strategy = strategy;
  }

  tryAcquire(): boolean {
    return this.strategy.tryAcquire().success;
  }

  acquire({ signal, timeout }: AcquireOptions = {}): Promise<void> {
    return poll(
      (ctx) => {
        const { retryAfterMs, success } = this.strategy.tryAcquire();
        ctx.delay = retryAfterMs;
        ctx.stop = success;
      },
      {
        delay: 0,
        signal,
        timeout,
      },
    );
  }
}
