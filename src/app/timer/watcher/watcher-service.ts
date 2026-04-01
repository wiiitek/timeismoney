import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { TimerService } from '../timer-service';

type SimpleFunction = () => void;

/**
 * Executes provided function periodically.
 */
@Injectable()
export class WatcherService {

  private timeBetweenExecutions: number;

  private timeoutRef: number | null = null;

  constructor() {
    this.timeBetweenExecutions = environment.watcherRefreshDelayInMillis;
  }

  start(fun: SimpleFunction, timerService: TimerService): void {
    this.stop();
    this._repeat(fun, timerService);
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

  private _repeat(fun: SimpleFunction, functionContext: TimerService): void {
    // it is safe to overwrite timeoutRef, because this method is executed after time elapsed
    this.timeoutRef = setTimeout(
      () => {
        fun.apply(functionContext);
        // The callback is already an arrow function, so this is lexically bound to WatcherService.
        this._repeat(fun, functionContext);
      },
      this.timeBetweenExecutions
    );
  }
}
