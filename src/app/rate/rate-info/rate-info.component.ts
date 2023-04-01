import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RateService } from '../rate.service';

@Component({
  selector: 'app-rate-info',
  templateUrl: './rate-info.component.html',
  styleUrls: ['./rate-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RateInfoComponent {

  constructor(private rateService: RateService) { }

  get hourlyRate(): Observable<number> {
    return this.rateService.hourlyRate$;
  }
}
