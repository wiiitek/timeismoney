import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RateService } from './rate.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RateComponent {

  @Input('ngModel')
  set hourlyRate(typed: string) {
    console.log('provided: ' + typed);
    const parsed = parseFloat(typed);

    this.rateService.rate(parsed);
  }

  get hourlyRate(): string {
    const value = this.rateService.getHourlyRate();
    console.log('get: ' + value);
    return value.toString();
  }

  constructor(private rateService: RateService) { }

}
