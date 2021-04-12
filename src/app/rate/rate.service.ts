import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  getHourlyRate(): number {
    return this.hourlyRateSource.value;
  }
}
