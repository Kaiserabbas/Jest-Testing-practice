const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add method', () => {
    test('should add two numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(-5, 7)).toBe(2);
      expect(calculator.add(0, 0)).toBe(0);
    });
  });

  describe('subtract method', () => {
    test('should subtract two numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
      expect(calculator.subtract(7, -5)).toBe(12);
      expect(calculator.subtract(0, 0)).toBe(0);
    });
  });

  describe('divide method', () => {
    test('should divide two numbers correctly', () => {
      expect(calculator.divide(6, 2)).toBe(3);
      expect(calculator.divide(10, -2)).toBe(-5);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrowError(
        'Cannot divide by zero.'
      );
    });
  });

  describe('multiply method', () => {
    test('should multiply two numbers correctly', () => {
      expect(calculator.multiply(3, 4)).toBe(12);
      expect(calculator.multiply(-2, 5)).toBe(-10);
      expect(calculator.multiply(0, 10)).toBe(0);
    });
  });
});
