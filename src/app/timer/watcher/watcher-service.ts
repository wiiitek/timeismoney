import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';

type SimpleFunction = () => void;

/**
 * Executes provided function periodically.
 */
@Injectable()
export class WatcherService {

  private timeBetweenExecutions;

  private timeoutRef: any;

  constructor() {
    this.timeBetweenExecutions = environment.watcherRefreshDelayInMillis;
  }

  start(fun: SimpleFunction, functionContext: any): void {
    this.stop();
    this._repeat(fun, functionContext);
  }

  stop(): void {
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
      this.timeoutRef = null;
    }
  }

  setTimeBetweenExecutions(millis: number): void {
    this.timeBetweenExecutions = millis;
  }

  private _repeat(fun: SimpleFunction, functionContext: any): void {
    const watcher = this;

    // it is safe to overwrite timeoutRef, because this method is executed after time elapsed
    this.timeoutRef = setTimeout(
      () => {
        fun.apply(functionContext);
        watcher._repeat(fun, functionContext);
      },
      this.timeBetweenExecutions
    );
  }
}
