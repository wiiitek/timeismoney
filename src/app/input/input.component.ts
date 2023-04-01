import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { RateService, RateType } from '../rate/rate.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {

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
