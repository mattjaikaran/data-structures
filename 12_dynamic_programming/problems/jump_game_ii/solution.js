/**
 * 🟡 jumpGameII (LC #45)
 * @param {number[]} nums
 * @returns {number}
 */
export function jumpGameII(nums) {
  let [jumps, curEnd, curFar] = [0, 0, 0];
  for (let i = 0; i < nums.length - 1; i++) {
    curFar = Math.max(curFar, i + nums[i]);
    if (i === curEnd) { jumps++; curEnd = curFar; }
  }
  return jumps;
}
