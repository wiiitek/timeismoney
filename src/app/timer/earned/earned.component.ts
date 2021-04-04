import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-earned',
  templateUrl: './earned.component.html',
  styleUrls: ['./earned.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EarnedComponent {

  wholeNumber = '000';

  cents = '00';

  @Input()
  set earned(earned: number | any) {
    const value = earned || 0;

    const centsValue = (value % 100).toString();
    this.cents = centsValue.length === 1 ? ('0' + centsValue) : centsValue;

    const wholeValue = Math.floor(value / 100).toString();
    const length = wholeValue.length;
    switch (length) {
      case 1: this.wholeNumber = '00' + wholeValue; break;
      case 2: this.wholeNumber = '0' + wholeValue; break;
      default: this.wholeNumber = wholeValue;
    }

  }

  private present(value: number): string {
    const str = value.toString();
    return str.length === 1 ? ('0' + str) : str;
  }
}
