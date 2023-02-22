import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { RateType } from '../rate/rate.service';
import { Rate2Service } from './rate2.service';

@Component({
  selector: 'app-rate2',
  templateUrl: './rate2.component.html',
  styleUrls: ['./rate2.component.scss'],
  //providers: [Rate2Service],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Rate2Component {

  get rateFromService(): Observable<string> | string {
    const rate = this.rate2Service.getRate();
    return rate.toString();
  }

  constructor(private rate2Service: Rate2Service) { }

  // https://stackoverflow.com/a/57200419
  onRateChange(newRate: string): void {
    this.rate2Service.setRate(newRate);
  }

  onRateTypeChange(event: any): void {
    const rateType: RateType = event.target.value;
    if (rateType !== this.rate2Service.rateType) {
      this.rate2Service.setRateType(rateType);
    }
  }

  perHour(): boolean {
    return this.rate2Service.rateType === RateType.PER_HOUR;
  }

  perMonth(): boolean {
    return this.rate2Service.rateType === RateType.PER_MONTH;
  }
}
