import { min } from './min';

test('min valid', () => {
  expect(min([2, 3, 4, 5, 1, 7])).toBe(1);
});

test('min invalid', () => {
  expect(min([])).toBe(Infinity);
});
