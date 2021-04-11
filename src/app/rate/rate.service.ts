import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  private hourlyRateSubject = new BehaviorSubject<number>(100);

  public hourlyRate$ = this.hourlyRateSubject.asObservable();

  rate(newValue: number) {
    this.hourlyRateSubject.next(newValue);
  }

  getHourlyRate(): number {
    return this.hourlyRateSubject.value;
  }
}
