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

  it('should return updated hourly rate', () => {
    // given
    service.setHourlyRate('123.456');

    // when:
    const actual = service.getHourlyRate();

    // then
    expect(actual).toBe(123.456);
  });

  it('should return previous rate if non-numeric update', () => {
    // given
    service.setHourlyRate('3.3');
    service.setHourlyRate('foobar');

    // when:
    const actual = service.getHourlyRate();

    // then
    expect(actual).toBe(3.3);
  });

  it('should return default rate if empty update', () => {
    // given
    service.setHourlyRate('');

    // when:
    const actual = service.getHourlyRate();

    // then
    expect(actual).toBe(100);
  });

  it('should update to zero', () => {
    // given
    service.setHourlyRate('0');

    // when:
    const actual = service.getHourlyRate();

    // then
    expect(actual).toBe(0);
  });
});
