import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  providers: [TimerService],
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

  constructor(private timerService: TimerService) { }

  onStartOrPause() {
    this.timerService.onStartOrPause();
  }
}
