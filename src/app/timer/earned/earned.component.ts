import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { EarnedService } from './earned.service';

@Component({
  selector: 'app-earned',
  templateUrl: './earned.component.html',
  providers: [EarnedService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EarnedComponent {

  wholeNumber = '000';

  cents = '00';

  @Input()
  set earned(earned: number | any) {
    this.cents = this.earnedService.cents(earned);
    this.wholeNumber = this.earnedService.wholeNumber(earned);
  }

  constructor(private earnedService: EarnedService) { }
}
