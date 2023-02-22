
import { RateType } from '../rate/rate.service';
import { Rate2Service } from './rate2.service';

describe('Rate2Service', () => {

  let service: Rate2Service;

  beforeEach(() => {
    service = new Rate2Service();
  });

  it('creates service', () => {
    expect(service).toBeTruthy();
  });

  it('returns hourly rate by default', () => {
    // when:
    const actual = service.getRate();

    // then
    expect(actual).toBe(100);
  });

  it('updates hourly rate', () => {
    // given
    service.setRate('123.456');

    // when:
    const actual = service.getRate();

    // then
    expect(actual).toBe(123.456);
  })


  it('updates rate on type change', () => {
    // given
    service.setRate('16800.168');
    const observed = service.hourlyRateSource

    // when:
    service.setRateType(RateType.PER_MONTH);

    // then
    expect(observed.getValue()).toBe(100.001);
  })
});
