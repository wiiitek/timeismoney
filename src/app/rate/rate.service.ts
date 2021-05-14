import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Range {
  PER_HOUR = "per-hour",
  PER_MONTH = "per-month",
}

@Injectable({
  providedIn: 'root'
})
export class RateService {

  hourlyRateSource = new BehaviorSubject<number>(100);

  hourlyRate$ = this.hourlyRateSource.asObservable();

  setHourlyRate(newValue: string): void {
    const parsed = parseFloat(newValue);
    if (parsed || parsed === 0) {
      this.hourlyRateSource.next(parsed);
    }
  }

  setRange(range: Range) {

  }

  getHourlyRate(): number {
    return this.hourlyRateSource.value;
  }
}
