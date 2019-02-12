/**
 * Find the min in an array of numbers
 */
export function minNative(array: number[]) {
  return Math.min(...array);
}

/**
 * Find the max in an array of numbers
 */
export function maxNative(array: number[]) {
  return Math.max(...array);
}

/**
 * Find the min in an array of numbers
 * - `Infinity` if no numbers are provided
 */
export function min(array: number[]) {
  if (!array.length) return Infinity;

  let minimum = array[0];
  for (const item of array) {
    if (item < minimum) minimum = item;
  }
  return minimum;
}

/**
 * Find the min in an array of numbers
 * - `-Infinity` if no numbers are provided
 */
export function max(array: number[]) {
  if (!array.length) return -Infinity;

  let maximum = array[0];
  for (const item of array) {
    if (item > maximum) maximum = item;
  }
  return maximum;
}
