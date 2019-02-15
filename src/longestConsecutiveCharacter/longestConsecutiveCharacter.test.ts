import { longestConsecutiveCharacter } from './longestConsecutiveCharacter';

test('longestConsecutiveCharacter', () => {
  expect(longestConsecutiveCharacter('AAAABBBCCCCCC')).toBe('C');
  expect(longestConsecutiveCharacter('FooBarBaa')).toBe('o');
  expect(longestConsecutiveCharacter('🌹👍👍🌹🌹👍👍🌹🌹🌹👍')).toBe('🌹');
  expect(longestConsecutiveCharacter('')).toBe('');
});
