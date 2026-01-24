import { RateService, RateType } from './rate-service';

describe('RateService', () => {

  const precisionForAssertions = 10;

  let tested: RateService;

  beforeEach(() => {
    tested = new RateService();
  });

  it('should return default rate', () => {
    expect(tested.getHourlyRate()).toBe(100);
  })

  it('should allow to set rate per month', () => {
    tested.setRateType(RateType.PER_MONTH);

    expect(tested).toBeTruthy();
  })

  it('should alow to set hours in month', () => {
    tested.setHoursInMonth(168);

    expect(tested).toBeTruthy();
  })

  it('should update to zero', () => {
    // given
    tested.setRate('0');

    // when:
    const actual = tested.getHourlyRate();

    // then
    expect(actual).toBe(0);
  });

  it('should return updated hourly rate', () => {
    // given
    tested.setRate('123.456');

    // when:
    const actual = tested.getHourlyRate();

    // then
    expect(actual).toBe(123.456);
  });

  it('should return default rate if empty update', () => {
    // given
    tested.setRate('');

    // when:
    const actual = tested.getHourlyRate();

    // then
    expect(actual).toBe(100);
  });

  it('should ignore rate lower than zero', () => {
    // when
    tested.setRate('-12345')
    // then
    expect(tested.getHourlyRate()).toBe(100);
  })

  it('should return previous rate if non-numeric update', () => {
    // given
    tested.setRate('3.3');
    tested.setRate('foobar');

    // when:
    const actual = tested.getHourlyRate();

    // then
    expect(actual).toBe(3.3);
  });

  it('should correctly recalculate hourly rate', () => {
    tested.setHoursInMonth(168);
    tested.setRateType(RateType.PER_MONTH);
    tested.setRate('16800');

    expect(tested.getHourlyRate()).toBe(100);
  })

  it('should recalculate hourly rate if parameters set in different order', () => {
    tested.setHoursInMonth(168);
    tested.setRate('8400');
    tested.setRateType(RateType.PER_MONTH);

    expect(tested.getHourlyRate()).toBe(50);
  })

  it('should recalculate hourly rate for different hours in month', () => {
    tested.setRate('8400');
    tested.setRateType(RateType.PER_MONTH);
    tested.setHoursInMonth(100);

    expect(tested.getHourlyRate()).toBe(84);
  })

  it('should recalculate if only one param changed', () => {
    tested.setRateType(RateType.PER_MONTH);

    expect(tested.getHourlyRate()).toBeCloseTo(0.595238095238, precisionForAssertions);
  })

  const parameters = [
    { rateType: RateType.PER_MONTH, hoursInMonth: 168, rate: '6800', expected: 40.4761904762 },
    { rateType: RateType.PER_MONTH, hoursInMonth: 80, rate: '123456', expected: 1543.2 },
    { rateType: RateType.PER_MONTH, hoursInMonth: 160, rate: '2437.45', expected: 15.2340625 },
    { rateType: RateType.PER_MONTH, hoursInMonth: 13, rate: '531', expected: 40.8461538462 },
  ];

  parameters.forEach((param) => {
    it(`should recalculate fractional hourly rate: ${param.expected}`, () => {

      tested.setRate(param.rate);
      tested.setRateType(param.rateType);
      tested.setHoursInMonth(param.hoursInMonth);

      expect(tested.getHourlyRate()).toBeCloseTo(param.expected, precisionForAssertions);
    })
  });
});
