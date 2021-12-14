import { randomInt } from './random';

test('Should include all numbers', () => {
  const res = [];
  for (let index = 0; index < 100; index++) {
    res.push(randomInt(1, 5));
  }
  expect(res.includes(1)).toBeTruthy();
  expect(res.includes(2)).toBeTruthy();
  expect(res.includes(3)).toBeTruthy();
  expect(res.includes(4)).toBeTruthy();
  expect(res.includes(5)).toBeTruthy();
  expect(res.includes(0)).toBeFalsy();
  expect(res.includes(6)).toBeFalsy();
});
