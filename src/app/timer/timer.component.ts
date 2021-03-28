import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent {


  get buttonText() {
    return this.timerService.buttonText$;
  }

  constructor(private timerService: TimerService) { }

}
