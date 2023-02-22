import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RateType } from '../rate/rate.service';

@Injectable()
export class Rate2Service {

  hoursInMonth = 168;

  rate = 100;

  rateType = RateType.PER_HOUR;

  hourlyRateSource = new BehaviorSubject<number>(this.rate);

  getRate(): number {
    return this.rate;
  }

  setRate(newValue: string): void {
    const parsed = parseFloat(newValue);
    const parsedOk = parsed || parsed === 0;
    if (parsedOk) {
      const valid = parsed >= 0;
      const hasChanged = parsed !== this.rate;
      if (valid && hasChanged) {
        this.rate = parsed;
      }
    }
  }

  /**
   * Doesn't change the value of rate. Only calculates new per hour rate to be published.
   *
   * @param newRateType if rate type is PER_MONTH then we need to recalculate hourly rate
   */
  setRateType(newRateType: RateType) {
    if (newRateType !== this.rateType) {
      switch (newRateType) {
        case RateType.PER_HOUR:
          const providedRateIsPerHour = this.rate
          this.hourlyRateSource.next(providedRateIsPerHour);
          this.rateType = newRateType;
          break;
        case RateType.PER_MONTH:
          const perHourBasedOnMonthlySalary = this.rate / this.hoursInMonth;
          this.hourlyRateSource.next(perHourBasedOnMonthlySalary);
          this.rateType = newRateType;
          break;
        default:
          throw new Error(`Unexpected rate type: ${this.rateType}`);
      }
    }
  }
}
