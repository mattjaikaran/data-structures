/**
 * Kadane's Algorithm — max contiguous subarray sum.
 * O(n) time, O(1) space.
 * @param {number[]} nums
 * @returns {number}
 */
export function maxSubarray(nums) {
  let best = nums[0], current = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    best = Math.max(best, current);
  }
  return best;
}
