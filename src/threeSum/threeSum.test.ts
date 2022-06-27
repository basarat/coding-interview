import { threeSum } from './threeSum';

// const expected = [[-3, -3, 6], [-3, 1, 2]];

test('should work', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]]);
});