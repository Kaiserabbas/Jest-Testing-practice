const stringLength = require('./stringLength');

describe('stringLength function', () => {
  // Test for the initial function
  test('should return the correct length of the string', () => {
    expect(stringLength('Hello')).toBe(5);
    expect(() => stringLength('')).toThrowError(
      'String length must be between 1 and 10 characters.'
    );
    expect(stringLength('1234567890')).toBe(10);
  });

  // Updated function with additional checks and errors
  test('should throw an error for strings that are too short or too long', () => {
    expect(() => stringLength('This is too long!')).toThrowError(
      'String length must be between 1 and 10 characters.'
    );
  });

  // Test for strings that are exactly 1 and 10 characters long
  test('should return the correct length for strings with length 1 and 10', () => {
    expect(stringLength('A')).toBe(1);
    expect(stringLength('0123456789')).toBe(10);
  });
});
