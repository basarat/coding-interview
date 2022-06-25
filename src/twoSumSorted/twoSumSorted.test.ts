import { twoSumSorted } from './twoSumSorted';

test('should work', () => {
  expect(twoSumSorted([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSumSorted([2, 7, 11, 15], 26)).toEqual([2, 3]);
  expect(twoSumSorted([2, 7, 11, 15], 17)).toEqual([0, 3]);
  expect(twoSumSorted([2, 7, 10, 15, 24], 22)).toEqual([1, 3]);
});
