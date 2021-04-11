import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { TimerService } from './timer.service';
import { WatcherService } from './watcher/watcher.service';
import { CalculatorService } from './calculator/calculator.service';
import { RateService } from '../rate/rate.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService, WatcherService, CalculatorService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent {

  @Input()
  label = 'Elapsed';

  get buttonText() {
    return this.timerService.buttonText$;
  }

  get elapsed() {
    return this.timerService.elapsed$;
  }

  get earned() {
    return this.timerService.earned$;
  }

  get statusClass() {
    const countingCss = '';
    const notCountingCss = 'button-primary';
    return this.timerService.counting ? countingCss : notCountingCss;
  }

  constructor(private timerService: TimerService) { }

  onStartOrPause() {
    this.timerService.onStartOrPause();
  }

  onReset() {
    this.timerService.onReset();
  }
}
