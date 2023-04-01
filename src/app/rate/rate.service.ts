import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum RateType {
  PER_HOUR = "per-hour",
  PER_MONTH = "per-month",
}

@Injectable({
  providedIn: 'root'
})
export class RateService {

  hoursInMonth = 168;

  rate = 100;

  rateType = RateType.PER_HOUR;

  hourlyRateSource = new BehaviorSubject<number>(100);

  hourlyRate$ = this.hourlyRateSource.asObservable();

  getRawRate(): number {
    return this.rate;
  }

  getHourlyRate(): number {
    return this.hourlyRateSource.value;
  }

  setRateType(newRateType: RateType) {
    if (newRateType !== this.rateType) {
      this.rateType = newRateType;
      this.recalculateHourlyRate();
    }
  }

  setHoursInMonth(newHoursInMonth: number): void {
    if (newHoursInMonth !== this.hoursInMonth) {
      this.hoursInMonth = newHoursInMonth;
      this.recalculateHourlyRate();
    }
  }

  setRate(newValue: string): void {
    const parsed = parseFloat(newValue);
    const parsedOk = parsed || parsed === 0;
    if (parsedOk) {
      const valid = parsed >= 0;
      const hasChanged = parsed !== this.rate;
      if (valid && hasChanged) {
        this.rate = parsed;
        this.recalculateHourlyRate();
      }
    }
  }

  private recalculateHourlyRate() {
    switch (this.rateType) {
      case RateType.PER_HOUR:
        this.hourlyRateSource.next(this.rate);
        break;
      case RateType.PER_MONTH:
        const perHour = this.rate / this.hoursInMonth;
        this.hourlyRateSource.next(perHour);
        break;
      default:
        throw new Error(`Unexpected rate type: ${this.rateType}`);
    }
  }
}
