import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-earned',
  templateUrl: './earned.component.html',
  styleUrls: ['./earned.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EarnedComponent {

  wholeNumber = 0;

  cents = 0;

  @Input()
  set earned(earned: number | any) {
    const value = earned || 0;
    this.cents = value % 100;
    this.wholeNumber = Math.floor(value / 100)
  }

}
