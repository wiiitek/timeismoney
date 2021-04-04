
/**
 * Executes provided function periodically.
 */
export class Watcher {

  private timeBetweenExecutions;

  private timeoutRef: any;

  constructor(timeBetweenExecutions: number = 500) {
    this.timeBetweenExecutions = timeBetweenExecutions
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

  private _repeat(fun: Function, functionContext: any) {
    const watcher = this;

    // it is safe to overwrite timeoutRef, because this method is executed after time elapsed
    this.timeoutRef = setTimeout(function () {
      fun.apply(functionContext);
      watcher._repeat(fun, functionContext);
    }, this.timeBetweenExecutions);
  }
}
