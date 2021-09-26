/** 
 * Given an @param input string, and an opening parenthesis @param openingIndex,
 *   return the corresponding closing parenthesis index if any (or return `null`)
 * Example: 
 *  `Betty (had (a bit) of butter (but the (butter))) was bitter`
 *   input ^                          should return ^
 */
export function getClosingParenthesis(input: string, openingIndex: number): number | null {
  if (input.length <= openingIndex) throw new Error('Out of bounds opening index');
  if (input[openingIndex] != '(') throw new Error('No parenthesis at opening index');

  let nestedOpened = 0;
  for (let index = openingIndex + 1; index < input.length; index++) {
    const char = input[index];

    if (char == '(') {
      nestedOpened++;
    } else if (char == ')') {
      if (nestedOpened == 0) {
        return index;
      }
      nestedOpened--;
    }
  }

  return null;
}
