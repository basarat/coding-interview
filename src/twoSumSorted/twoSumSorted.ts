/** 
 * Given 
 *  @param nums array of numbers that sorted in ascending order
 *  @param target number
 * 
 * @returns indices of the two numbers that add up to target
 * 
 * You may assume:
 *  - each input would have exactly one solution
 *  - and you may not use the same element twice
 * 
 * @example
 *  twoSumSorted([2, 7, 10, 15, 24], 22) => ([1,3])
 */
export function twoSumSorted(nums: number[], target: number): [number, number] {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  throw new Error('Invalid Input: No match found');
}