import { removeDuplicates } from './removeDuplicates';

test('Should remove duplicates', () => {
  expect(removeDuplicates([1, 2, 3, 1, 5, 6])).toEqual([1, 2, 3, 5, 6]);
});
