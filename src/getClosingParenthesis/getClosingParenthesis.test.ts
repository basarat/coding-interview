import { getClosingParenthesis } from './getClosingParenthesis';

test('getClosingParenthesis', () => {
  expect(() => getClosingParenthesis('hello world', 0)).toThrow('No parenthesis at opening index');
  expect(() => getClosingParenthesis('hello world', 15)).toThrowError('Out of bounds opening index');
  expect(getClosingParenthesis('(hello world', 0)).toBe(null);
  expect(getClosingParenthesis('hello (world', 6)).toBe(null);
  expect(getClosingParenthesis('hello (world)', 6)).toBe(12);
  expect(getClosingParenthesis('hello (wo)rld)', 6)).toBe(9);
  expect(getClosingParenthesis('hello (wo(r)ld)s', 6)).toBe(14);
});
