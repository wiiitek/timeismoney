import { TestBed } from '@angular/core/testing';

import { RateService, RateType } from './rate.service';

describe('RateService', () => {

  const precision = 10;

  let service: RateService;

  beforeEach(() => {
    service = new RateService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return updated hourly rate', () => {
    // given
    service.setRate('123.456');

    // when:
    const actual = service.getHourlyRate();

    // then
    expect(actual).toBe(123.456);
  });

  it('should return previous rate if non-numeric update', () => {
    // given
    service.setRate('3.3');
    service.setRate('foobar');

    // when:
    const actual = service.getHourlyRate();

    // then
    expect(actual).toBe(3.3);
  });

  it('should return default rate if empty update', () => {
    // given
    service.setRate('');

    // when:
    const actual = service.getHourlyRate();

    // then
    expect(actual).toBe(100);
  });

  it('should update to zero', () => {
    // given
    service.setRate('0');

    // when:
    const actual = service.getHourlyRate();

    // then
    expect(actual).toBe(0);
  });

  it('should allow to set rate per month', () => {
    service.setRateType(RateType.PER_MONTH);

    expect(service).toBeTruthy();
  })

  it('should alow to set hours in month', () => {
    service.setHoursInMonth(168);

    expect(service).toBeTruthy();
  })

  it('should correctly recalculate hourly rate', () => {
    service.setHoursInMonth(168);
    service.setRateType(RateType.PER_MONTH);
    service.setRate('16800');

    expect(service.getHourlyRate()).toBe(100);
  })

  it('should recalculate hourly rate if parameters set in different order', () => {
    service.setHoursInMonth(168);
    service.setRate('8400');
    service.setRateType(RateType.PER_MONTH);

    expect(service.getHourlyRate()).toBe(50);
  })

  it('should recalculate hourly rate for different hours in month', () => {
    service.setRate('8400');
    service.setRateType(RateType.PER_MONTH);
    service.setHoursInMonth(100);

    expect(service.getHourlyRate()).toBe(84);
  })


  it('should return default rate', () => {
    expect(service.getHourlyRate()).toBe(100);
  })

  it('should recalculate if only one param changed', () => {
    service.setRateType(RateType.PER_MONTH);

    expect(service.getHourlyRate()).toBeCloseTo(0.595238095238, precision);
  })

  const parameters = [
    { rateType: RateType.PER_MONTH, hoursInMonth: 168, rate: '6800', expected: 40.4761904762 },
    { rateType: RateType.PER_MONTH, hoursInMonth: 80, rate: '123456', expected: 1543.2 },
    { rateType: RateType.PER_MONTH, hoursInMonth: 160, rate: '2437.45', expected: 15.2340625 },
    { rateType: RateType.PER_MONTH, hoursInMonth: 13, rate: '531', expected: 40.8461538462 },
  ];

  parameters.forEach((param) => {
    it(`should recalculate fractional hourly rate: ${param.expected}`, () => {


      service.setRate(param.rate);
      service.setRateType(param.rateType);
      service.setHoursInMonth(param.hoursInMonth);

      expect(service.getHourlyRate()).toBeCloseTo(param.expected, precision);
    })
  });
});
