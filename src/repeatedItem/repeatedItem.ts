export type RepeatedItemResult<T> =
  | { type: 'found', item: T }
  | { type: 'not-found' };

/**
 * Returns the first repeated item from an array if any
 */
export function repeatedItem<T>(array: T[]): RepeatedItemResult<T> {
  const set = new Set<T>();
  for (const item of array) {
    if (set.has(item)) return { type: 'found', item };
    else set.add(item);
  }
  return { type: 'not-found' };
}