import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent {


  get buttonText() {
    return this.timerService.buttonText$;
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
