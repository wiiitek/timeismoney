import { Injectable } from '@angular/core';

@Injectable()
export class RateService {

  getHourlyRate(): number {
    return 100;
  }
}
