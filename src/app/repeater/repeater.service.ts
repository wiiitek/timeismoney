import { Injectable, OnDestroy } from '@angular/core';

import { environment } from '../../environments/environment';

type SimpleFunction = () => void;

/**
 * Executes provided function periodically.
 */
@Injectable()
export class RepeaterService implements OnDestroy {

  private timeBetweenExecutions;

  private nextPlannexExecution: any = null;

  constructor() {
    this.timeBetweenExecutions = environment.watcherRefreshDelayInMillis;
  }

  start(fun: SimpleFunction, functionContext: any): void {
    this.stop();
    this._repeat(fun, functionContext);
  }

  stop(): void {
    if (this.nextPlannexExecution) {
      clearTimeout(this.nextPlannexExecution);
      this.nextPlannexExecution = null;
    }
  }

  ngOnDestroy(): void {
    this.stop()
  }

  private _repeat(fun: SimpleFunction, functionContext: any): void {
    const watcher = this;

    // it is safe to overwrite timeoutRef, because this method is executed after time elapsed
    this.nextPlannexExecution = setTimeout(
      () => {
        fun.apply(functionContext);
        watcher._repeat(fun, functionContext);
      },
      this.timeBetweenExecutions
    );
  }
}
