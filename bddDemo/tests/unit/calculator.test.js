const { Calculator, CalculationError } = require('../../src/calculator');

describe('Testing the calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  afterEach(() => {});

  test('addition works', () => {
    expect(calc.add(2, 2)).toBe(4);
  });

  test('subtraction works', () => {
    expect(calc.subtract(2, 2)).toBe(0);
  });

  test('multiplication works', () => {
    expect(calc.multiply(2, 2)).toBe(4);
  });

  test('division works', () => {
    expect(calc.divide(2, 2)).toBe(1);
  });

  test('division by zero throws an error', () => {
    try {
      calc.divide(2, 0);
    } catch (error) {
      expect(error).toBeInstanceOf(CalculationError);
      expect(error.name).toBe('CalculationError');
      expect(error.toString()).toBe('CalculationError: Cannot divide by zero');
      expect(error.message).toBe('Cannot divide by zero');
    }
  });
});
