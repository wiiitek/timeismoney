import { Injectable } from "@angular/core";

import { environment } from '../../../environments/environment';

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

  start(fun: Function, functionContext: any) {
    this.stop();
    this._repeat(fun, functionContext);
  }

  stop() {
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
      this.timeoutRef = null;
    }
  }

  setTimeBetweenExecutions(millis: number) {
    this.timeBetweenExecutions = millis;
  }

  private _repeat(fun: Function, functionContext: any) {
    const watcher = this;

    // it is safe to overwrite timeoutRef, because this method is executed after time elapsed
    this.timeoutRef = setTimeout(function () {
      fun.apply(functionContext);
      watcher._repeat(fun, functionContext);
    }, this.timeBetweenExecutions);
  }
}
