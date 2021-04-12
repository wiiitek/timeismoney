import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
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

  @Input('ngModel')
  set hourlyRateFromInputField(newValue: string) {
    this.rateService.setHourlyRate(newValue);
  }

  get hourlyRateFromService(): Observable<string> {
    return this.rateService.hourlyRate$
      .pipe(map<number, string>(
        numberValue => numberValue.toString()
      ));
  }

  constructor(private rateService: RateService) { }

}
