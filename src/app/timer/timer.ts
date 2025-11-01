import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnDestroy, inject } from '@angular/core';
import { NgClass, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { RateInput } from '../rate/rate-input/rate-input';
import { TimerService } from './timer-service';
import { WatcherService } from './watcher/watcher-service';
import { CalculatorService } from './calculator/calculator-service';
import { Elapsed } from './elapsed/elapsed';
import { Earned } from './earned/earned';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.html',
  styleUrls: ['./timer.scss'],
  providers: [TimerService, WatcherService, CalculatorService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe,
    RateInput,
    Elapsed,
    Earned,
  ]
})
export class Timer implements OnDestroy {
  private readonly timerService = inject(TimerService);


  get buttonText(): Observable<string> {
    return this.timerService.buttonText$;
  }

  get hourlyRate(): Observable<number> {
    return this.timerService.hourlyRate$;
  }

  get elapsed(): Observable<number> {
    return this.timerService.elapsed$;
  }

  get earned(): Observable<number> {
    return this.timerService.earned$;
  }

  get statusClass(): string {
    const countingCss = '';
    const notCountingCss = 'button-primary';
    return this.timerService.counting ? countingCss : notCountingCss;
  }

  onStartOrPause(): void {
    this.timerService.onStartOrPause();
  }

  onReset(): void {
    this.timerService.onReset();
  }

  ngOnDestroy(): void {
    this.timerService.ngOnDestroy();
  }
}
