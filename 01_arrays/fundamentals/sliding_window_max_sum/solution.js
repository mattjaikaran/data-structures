/**
 * Sliding Window Maximum Sum (fixed window size k).
 * O(n) time, O(1) space.
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
export function slidingWindowMaxSum(nums, k) {
  let window = nums.slice(0, k).reduce((a, b) => a + b, 0);
  let best = window;
  for (let i = k; i < nums.length; i++) {
    window += nums[i] - nums[i - k];
    best = Math.max(best, window);
  }
  return best;
}
