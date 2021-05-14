import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { RateService, RateType } from './rate.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RateComponent {

  get rateFromService(): Observable<string> | string {
    const rate = this.rateService.getRate();
    return rate.toString();
  }

  constructor(private rateService: RateService) { }

  // https://stackoverflow.com/a/57200419
  onRateChange(newRate: string): void {
    this.rateService.setRate(newRate);
  }

  onRateTypeChange(event: any): void {
    const rateType: RateType = event.target.value;
    if (rateType !== this.rateService.rateType) {
      this.rateService.setRateType(rateType);
    }
  }

  perHour(): boolean {
    return this.rateService.rateType === RateType.PER_HOUR;
  }

  perMonth(): boolean {
    return this.rateService.rateType === RateType.PER_MONTH;
  }
}
