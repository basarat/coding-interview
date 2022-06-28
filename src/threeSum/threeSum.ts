/** 
 * Given a @param nums array
 * @returns all the triplets `[nums[i], nums[j], nums[k]]` such that
 *  - nums[i] + nums[j] + nums[k] == 0
 *  - i != j, i != k, and j != k (don't reuse members at the same index)
 *  - the solution set must not contain duplicate triplets.
 * 
 * @example
 * - threeSum([-1, 0, 1, 2, -1, -4]) => ([ [-1,-1,2], [-1,0,1] ])
 */
export function threeSum(nums: number[]): [number, number, number][] {
  const result: [number, number, number][] = [];
  nums = nums.slice().sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }

  return result;
}