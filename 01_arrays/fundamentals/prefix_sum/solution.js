/**
 * Prefix Sum — O(n) build, O(1) range query.
 * prefixSum[i] = sum of arr[0..i-1]
 * Range sum [l, r] = prefix[r+1] - prefix[l]
 * @param {number[]} nums
 * @returns {number[]}
 */
export function buildPrefixSum(nums) {
  const prefix = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) prefix[i + 1] = prefix[i] + nums[i];
  return prefix;
}
