/** @param {number[]} nums */
export function maxProductSubarray(nums) {
  let best = nums[0], curMax = nums[0], curMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const [a, b, c] = [nums[i], curMax * nums[i], curMin * nums[i]];
    curMax = Math.max(a, b, c);
    curMin = Math.min(a, b, c);
    best = Math.max(best, curMax);
  }
  return best;
}
