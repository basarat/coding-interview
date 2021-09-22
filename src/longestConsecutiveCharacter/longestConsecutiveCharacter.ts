/** 
 * Given a string, returns the maximum consecutive repeating character in string.
 * Example: 'AAAABBBCCCCCCAAAA' => 'C'
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
      currentChar = char;
      currentCharCount = 1;
    }

    if (currentCharCount > resultCharCount) {
      resultChar = char;
      resultCharCount = currentCharCount;
    }
  }

  return resultChar;
}
