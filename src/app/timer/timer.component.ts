import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { TimerService } from './timer.service';
import { RepeaterService } from '../repeater/repeater.service';
import { CalculatorService } from '../calculator/calculator.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService, RepeaterService, CalculatorService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent {

  @Input()
  label = 'Elapsed';

  get buttonText(): Observable<string> {
    return this.timerService.buttonText$;
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
