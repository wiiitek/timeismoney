import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { NGXLogger } from "ngx-logger";

import { RateService, RateType } from './rate.service';

@Component({
  selector: 'app-rate-input',
  templateUrl: './rate-input.component.html',
  styleUrls: ['./rate-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RateInputComponent {

  constructor(
    private log: NGXLogger,
    private rateService: RateService,
  ) { }

  get rate(): number {
    return this.rateService.getRate();
  }

  // https://stackoverflow.com/a/57200419
  onRateChange(newRate: string): void {
    this.rateService.setRate(newRate);
    this.log.debug("Rate changed to: " + newRate);
  }

  onRateTypeChange(event: any): void {
    const rateType: RateType = event.target.value;
    if (rateType !== this.rateService.rateType) {
      this.rateService.setRateType(rateType);
      this.log.debug("Rate type changed to: " + rateType);
    }
  }

  perHour(): boolean {
    return this.rateService.rateType === RateType.PER_HOUR;
  }

  perMonth(): boolean {
    return this.rateService.rateType === RateType.PER_MONTH;
  }
}
