import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { TimerService } from './timer.service';
import { WatcherService } from './watcher/watcher.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService, WatcherService],
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

  get statusClass() {
    const countingCss = '';
    const notCountingCss = 'button-primary';
    return this.timerService.counting ? countingCss : notCountingCss;
  }

  constructor(public timerService: TimerService) { }

  onStartOrPause() {
    this.timerService.onStartOrPause();
  }

  onReset() {
    this.timerService.onReset();
  }
}
