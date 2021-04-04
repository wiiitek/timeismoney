import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Watcher } from './watcher';

@Injectable()
export class TimerService implements OnDestroy {

  private stepLengthInMillis = 500;

  private buttonTextSource = new BehaviorSubject<string>('Start');
  private elapsedMillisSource = new BehaviorSubject<number>(0);

  private watcher: Watcher = new Watcher();

  public counting: boolean = false;
  public buttonText$ = this.buttonTextSource.asObservable();
  public elapsed$ = this.elapsedMillisSource.asObservable();

  onStartOrPause() {
    if (this.counting) {
      this.watcher.stop();
      this.buttonTextSource.next('Start');
      this.counting = false;
    } else {
      this.watcher.start(this.updateElapsed, this);
      this.buttonTextSource.next('Pause');
      this.counting = true;
    }
  }

  onReset() {
    if(this.counting) {
      this.counting = false;
      this.watcher.stop();
    }
    this.buttonTextSource.next('Start');
  }

  ngOnDestroy(): void {
    this.watcher.stop();
  }

  private updateElapsed() {
    const newElapsed = this.elapsedMillisSource.getValue() + this.stepLengthInMillis;
    this.elapsedMillisSource.next(newElapsed);
  }

}
