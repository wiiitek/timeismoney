import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RateService } from './rate.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RateComponent {

  _hourlyRate = -1;

  get hourlyRateFromService(): Observable<string> | string {
    // return this.rateService.hourlyRate$
    //   .pipe(map<number, string>(
    //     (numberValue) => {
    //       this._hourlyRate = numberValue;
    //       return numberValue.toString();}
    //   ));
    const value = this.rateService.getHourlyRate().toString();
    return value;
  }

  constructor(private rateService: RateService) { }

  // https://stackoverflow.com/a/57200419
  onRateChange(newValue: string) {
    this.rateService.setHourlyRate(newValue);
  }
}
