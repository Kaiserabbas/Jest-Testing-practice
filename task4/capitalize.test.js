const capitalize = require('./capitalize');

test('capitalize function should capitalize the first character of the string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
  expect(capitalize('OpenAI')).toBe('OpenAI');
});

test('capitalize function should throw an error for empty input', () => {
  expect(() => capitalize('')).toThrowError(
    'Input must be a non-empty string.'
  );
});

test('capitalize function should throw an error for non-string input', () => {
  expect(() => capitalize(123)).toThrowError(
    'Input must be a non-empty string.'
  );
  expect(() => capitalize(null)).toThrowError(
    'Input must be a non-empty string.'
  );
});
