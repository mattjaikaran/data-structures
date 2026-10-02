/**
 * 🟢 Missing Number (LC #268) — XOR indices and values
 * @param {number[]} nums
 * @returns {number}
 */
export const missingNumber = (nums) => {
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) res ^= i ^ nums[i];
  return res;
};
