import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  toMoney(millis: number, hourlyRate: number): number {
    const elapsedSeconds = millis / 1000;
    const elapsedMinutes = elapsedSeconds / 60;

    const minuteRate = hourlyRate / 60;

    const moneyInCents = minuteRate * elapsedMinutes * 100;
    return Math.round(moneyInCents);
  }
}
