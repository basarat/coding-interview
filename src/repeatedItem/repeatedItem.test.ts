import { repeatedItem } from './repeatedItem';

test('repeatedItem', () => {
  expect(repeatedItem([1, 2, 3])).toMatchObject({ type: 'not-found' });
  expect(repeatedItem([1, 2, 2])).toMatchObject({ type: 'found', item: 2 });
});
