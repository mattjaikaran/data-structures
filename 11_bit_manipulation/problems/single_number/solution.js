/**
 * 🟢 Single Number (LC #136) — XOR all, pairs cancel
 * @param {number[]} nums
 * @returns {number}
 */
export const singleNumber = (nums) => nums.reduce((a, b) => a ^ b, 0);
