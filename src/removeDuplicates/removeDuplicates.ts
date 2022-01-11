/** 
 * Remove all duplicates of items from an array 
 */
export function removeDuplicates<T>(items: T[]): T[] {
  return [...new Set<T>(items)];
}