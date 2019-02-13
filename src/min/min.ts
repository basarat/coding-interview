/**
 * Find the min in an array of numbers
 */
export function min(array: number[]): number {
  let minimum = Infinity;
  for (const item of array) {
    if (item < minimum) {
      minimum = item;
    }
  }
  return minimum;
}

/**
 * Find the min in an array of numbers
 */
export function minNative(array: number[]): number {
  return Math.min(...array);
}
