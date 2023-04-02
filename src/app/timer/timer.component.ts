import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { TimerService } from './timer.service';
import { WatcherService } from './watcher/watcher.service';
import { CalculatorService } from './calculator/calculator.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService, WatcherService, CalculatorService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent {

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
}
