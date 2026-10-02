/**
 * 🟡 Subsets (LC #78) — bitmask to enumerate 2^n subsets
 * @param {number[]} nums
 * @returns {number[][]}
 */
export const subsetsFromMask = (nums) =>
  Array.from({ length: 1 << nums.length }, (_, mask) => nums.filter((_, i) => (mask >> i) & 1));
