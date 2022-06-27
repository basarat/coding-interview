/** 
 * Given a @param nums array
 * @returns all the triplets `[nums[i], nums[j], nums[k]]` such that
 *  - i != j, i != k, and j != k
 *  - and nums[i] + nums[j] + nums[k] == 0
 * 
 * Notice that the solution set must not contain duplicate triplets.
 * 
 * @example
 * - threeSum([-1, 0, 1, 2, -1, -4]) => ([ [-1,-1,2], [-1,0,1] ])
 */
export function threeSum(nums: number[]): [number, number, number][] {
  const result: [number, number, number][] = [];
  
  nums.slice().sort();

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}