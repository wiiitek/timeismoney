import { TestBed } from '@angular/core/testing';

import { RateService } from './rate.service';

describe('RateService', () => {
  let service: RateService;

  beforeEach(() => {
    service = new RateService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
