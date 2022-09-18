import { derange } from './derange';

test('Should change all indexes', () => {
  const orig = Array.from({ length: 100 }, (_, i) => i);
  const deranged = derange(orig);
  expect(orig.some((og, i) => og === deranged[i])).toBeFalsy();
});