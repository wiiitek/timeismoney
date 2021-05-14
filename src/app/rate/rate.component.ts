import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { RateService, Range } from './rate.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RateComponent {

  get hourlyRateFromService(): Observable<string> | string {
    const hourlyRate = this.rateService.getHourlyRate();
    return hourlyRate.toString();
  }

  constructor(private rateService: RateService) { }

  // https://stackoverflow.com/a/57200419
  onRateChange(newRate: string): void {
    this.rateService.setHourlyRate(newRate);
  }
}
