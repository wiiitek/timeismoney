import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { NgClass, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { RateInputComponent } from '../rate/rate-input/rate-input.component';
import { TimerService } from './timer.service';
import { WatcherService } from './watcher/watcher.service';
import { CalculatorService } from './calculator/calculator.service';
import { ElapsedComponent } from './elapsed/elapsed.component';
import { EarnedComponent } from './earned/earned.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService, WatcherService, CalculatorService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe,
    RateInputComponent,
    ElapsedComponent,
    EarnedComponent,
  ]
})
export class TimerComponent implements OnDestroy {

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

  constructor(private timerService: TimerService) { }

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
