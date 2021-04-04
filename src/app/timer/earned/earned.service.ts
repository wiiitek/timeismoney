import { Injectable } from '@angular/core';

@Injectable()
export class EarnedService {

  wholeNumber(earned: number): string {
    const wholeValue = Math.floor(earned / 100).toString();
    const length = wholeValue.length;
    switch (length) {
      case 1: return '00' + wholeValue;
      case 2: return '0' + wholeValue;
      default: return wholeValue;
    }
  }

  cents(earned: number): string {
    const centsValue = (earned % 100).toString();
    return centsValue.length === 1 ? ('0' + centsValue) : centsValue;
  }

}
