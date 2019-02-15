import { longestConsecutiveCharacter } from './longestConsecutiveCharacter';

test('longestConsecutiveCharacter', () => {
  expect(longestConsecutiveCharacter('AAAABBBCCCCCC')).toBe('C');
  expect(longestConsecutiveCharacter('AnotherExample')).toBe('A');
  expect(longestConsecutiveCharacter('')).toBe('');
  expect(longestConsecutiveCharacter('🌹👍👍🌹🌹👍👍🌹🌹🌹👍')).toBe('🌹');
});
