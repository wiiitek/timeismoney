import { CalculatorService } from './calculator-service';

describe('CalculatorService', () => {
  let tested: CalculatorService;

  beforeEach(() => {
    tested = new CalculatorService();
  });

  const parameters = [
    { minutes: 60, hourlyRate: 23, expectedCents: 2300 },
    { minutes: 10, hourlyRate: 60, expectedCents: 1000 },
    { minutes: 0.5, hourlyRate: 60, expectedCents: 50 },
    { minutes: 123, hourlyRate: 65, expectedCents: 13325 },
  ];

  parameters.forEach((param) => {
    it(`should calculate from time to cents: ${param.expectedCents}`, () => {

      const actual = tested.toMoney(param.minutes * 60 * 1000, param.hourlyRate);

      expect(actual).toBe(param.expectedCents);
    })
  });
});
