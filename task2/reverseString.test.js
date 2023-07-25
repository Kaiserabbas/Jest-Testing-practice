const reverseString = require('./reverseString');

describe('reverseString function', () => {
  test('should reverse the string', () => {
    expect(reverseString('Hello')).toBe('olleH');
    expect(reverseString('12345')).toBe('54321');
    expect(reverseString('')).toBe('');
    expect(reverseString('A')).toBe('A');
    expect(reverseString('Hello, World!')).toBe('!dlroW ,olleH');
  });
});
