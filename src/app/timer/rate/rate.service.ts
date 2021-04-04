import { Injectable } from '@angular/core';

@Injectable()
export class RateService {

  constructor() { }

  getHourlyRate(): number {
    return 100;
  }
}
