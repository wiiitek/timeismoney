
import { CalculatorService } from './calculator-service';

describe('CalculatorService', () => {
  let tested: CalculatorService;

  beforeEach(() => {
    tested = new CalculatorService();
  });

  it('should be created', () => {
    expect(tested).toBeTruthy();
  });
});
