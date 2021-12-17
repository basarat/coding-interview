import { randomInt } from '../random/random';

/** 
 * @param array the array to shuffle
 * @return shuffled version of the input array
 */
export function shuffle<T>(array: T[]): T[] {
  array = array.slice();

  for (let i = 0; i < array.length; i++) {
    const randomIndex = randomInt(i, array.length - 1);
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}