
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    service = new CalculatorService();
  });

  it('creates service', () => {
    expect(service).toBeTruthy();
  });

  [
    // expected result is in cents (mutliplied by 100)
    { title: "calculates hourly rate in an hour", elapsed: 3600 * 1000, hourlyRate: 123, expected: 12300 },
    { title: "calculates one cent for one second if rate is 36", elapsed: 1000, hourlyRate: 36, expected: 1 },
    { title: "calculates ten cents for ten seconds if rate is 36", elapsed: 10 * 1000, hourlyRate: 36, expected: 10 },
    { title: "calculates 123456789 cents for 123456789 seconds if rate is 36", elapsed: 123456789 * 1000, hourlyRate: 36, expected: 123456789 },
    { title: "calculates zero for half second if rate is 1", elapsed: 500, hourlyRate: 1, expected: 0 },
    { title: "calculates zero for 1234 seconds if rate is 0", elapsed: 1234000, hourlyRate: 0, expected: 0 },
  ].forEach(({ title, elapsed, hourlyRate, expected }) => {
    it(title as string, () => {
      const actual = service.toMoney(elapsed, hourlyRate)
      expect(actual).toBe(expected);
    })
  });
});
