import { threeSum } from './threeSum';

test('base example', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]]);
});

test('another test', () => {
  expect(threeSum([-3, -3, 1, 2, 3, 4, 6])).toEqual([[-3, -3, 6], [-3, 1, 2]]);
});