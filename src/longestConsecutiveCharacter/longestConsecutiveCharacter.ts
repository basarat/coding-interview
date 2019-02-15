/** 
 * Given a string, returns the maximum consecutive repeating character in string.
 * Examples:
 * 'AAAABBBCCCCCC' => 'C'
 * 'AnotherExample' => 'A'
 * '🌹👍👍🌹🌹👍👍🌹🌹🌹👍' => '🌹'
 * '' => ''
 */
export function longestConsecutiveCharacter(input: string): string {
  let resultChar = '',
    resultCharCount = 0,
    currentChar = '',
    currentCharCount = 0;

  for (const char of input) {
    if (char === currentChar) {
      currentCharCount++;
    } else {
      currentCharCount = 1;
      currentChar = char;
    }
    
    if (currentCharCount > resultCharCount) {
      resultChar = char;
      resultCharCount = currentCharCount;
    }
  }

  return resultChar;
}
