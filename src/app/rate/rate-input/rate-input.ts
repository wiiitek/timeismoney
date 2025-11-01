import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RateService, RateType } from '../rate.service';

@Component({
  selector: 'app-rate-input',
  templateUrl: './rate-input.html',
  styleUrls: ['./rate-input.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FormsModule]
})
export class RateInputComponent {
  private readonly rateService = inject(RateService);


  get rate(): number {
    return this.rateService.getRate();
  }

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
