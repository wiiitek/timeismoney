import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ElapsedService {

  private behaviorSubject = new BehaviorSubject<string>('00:00:00');

  public convertedValue$ = this.behaviorSubject.asObservable();

  elapsed(elapsedMillis: number): void {
    const converted = this.convert(elapsedMillis);
    this.behaviorSubject.next(converted);
  }

  convert(elapsedMillis: number): string {
    const minute = 60_000;
    const hour = 60 * minute;

    const hours = Math.floor(elapsedMillis / hour);
    const minutes = Math.floor((elapsedMillis % hour) / minute);

    const millis = elapsedMillis % minute;
    const seconds = Math.floor(millis / 1000);

    return this.present(hours) + ':' + this.present(minutes) + ':' + this.present(seconds);
  }

  private present(value: number): string {
    const str = value.toString();
    return str.length === 1 ? ('0' + str) : str;
  }
}
