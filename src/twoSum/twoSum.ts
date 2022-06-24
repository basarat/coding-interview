/** 
 * Given an array of @param nums and a @param target
 * @returns indices of the two numbers such that they add up to target
 * 
 * You may assume:
 *  - each input would have exactly one solution
 *  - and you may not use the same element twice.
 * 
 * @example
 *  twoSum([2, 7, 11, 15], 9) => ([0,1])
 */
export function twoSum(nums: number[], target: number): [number, number] {
  const numToIndex = new Map<number, number>();
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    if (numToIndex.has(target - num)) {
      return [numToIndex.get(target - num)!, index];
    }
    numToIndex.set(num, index);
  }

  throw new Error('Invalid Input: No match found');
}