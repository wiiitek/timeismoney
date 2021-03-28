import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private stepLengthInMillis = 20;

  private behaviorSubject = new BehaviorSubject<string>('Start');

  public counting: boolean = false;
  public buttonText$ = this.behaviorSubject.asObservable();

  onStartOrPause() {
    if (this.counting) {
      this.behaviorSubject.next('Start');
      this.counting = false;
    } else {
      this.behaviorSubject.next('Pause');
      this.counting = true;
    }
  }
}
