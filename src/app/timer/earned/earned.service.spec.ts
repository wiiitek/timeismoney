import { TestBed } from '@angular/core/testing';

import { EarnedService } from './earned.service';

describe('EarnedService', () => {
  let service: EarnedService;

  beforeEach(() => {
    service = new EarnedService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should just return two-digit cents', () => {
    // when
    const actual = service.cents(12345);

    // then
    expect(actual).toBe('45');
  });

  it('should add zero for one-digit cents', () => {
    // when
    const actual = service.cents(3);

    // then
    expect(actual).toBe('03');
  });

  it('should return zero prefixed cents', () => {
    // when
    const actual = service.cents(78900000009);

    // then
    expect(actual).toBe('09');
  });

  it('should just return big whole number', () => {
    // when
    const actual = service.wholeNumber(12340056);

    // then
    expect(actual).toBe('123400');
  });

  it('should add two zeros to whole number', () => {
    // when
    const actual = service.wholeNumber(321);

    // then
    expect(actual).toBe('003');
  });


  it('should add two zeros to whole number', () => {
    // when
    const actual = service.wholeNumber(9900);

    // then
    expect(actual).toBe('099');
  });

});
