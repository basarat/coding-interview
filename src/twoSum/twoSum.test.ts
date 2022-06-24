import { twoSum } from './twoSum';

test('should work', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSum([2, 7, 11, 15], 26)).toEqual([2, 3]);
  expect(twoSum([2, 7, 11, 15], 17)).toEqual([0, 3]);
});
