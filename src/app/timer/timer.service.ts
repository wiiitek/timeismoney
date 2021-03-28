import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TimerService implements OnDestroy {

  private stepLengthInMillis = 500;

  private behaviorSubject = new BehaviorSubject<string>('Start');
  private elapsedMillisSource = new BehaviorSubject<number>(0);
  private countdownTimerRef: any;

  public counting: boolean = false;
  public buttonText$ = this.behaviorSubject.asObservable();
  public elapsed$ = this.elapsedMillisSource.asObservable();

  onStartOrPause() {
    if (this.counting) {
      this.clearCountdownTimerRef();
      this.behaviorSubject.next('Start');
      this.counting = false;
    } else {
      this.clearCountdownTimerRef();
      this.doCount()
      this.behaviorSubject.next('Pause');
      this.counting = true;
    }
  }

  ngOnDestroy(): void {
    this.clearCountdownTimerRef();
  }

  private doCount() {
    this.countdownTimerRef = setTimeout(() => {
      const newElapsed = this.elapsedMillisSource.getValue() + this.stepLengthInMillis;
      this.elapsedMillisSource.next(newElapsed);
      this.doCount();
    }, this.stepLengthInMillis);
  }

  private clearCountdownTimerRef() {
    if (this.countdownTimerRef) {
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }
}
