import { randomInt } from '../random/random';

/** 
 * @param array the array from which we 
 * @return a uniform random derangement
 */
export function derange<T>(array: T[]): T[] {
  array = array.slice();

  for (let i = 0; i < array.length - 1; i++) {
    const randomIndex = randomInt(i + 1, array.length - 1);
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}