class CalculationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CalculationError';
  }

  toString() {
    return `${this.name}: ${this.message}`;
  }
}

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new CalculationError('Cannot divide by zero');
    }

    return a / b;
  }
}

module.exports = {
  Calculator,
  CalculationError,
};
