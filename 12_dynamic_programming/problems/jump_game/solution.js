/**
 * 🟡 jumpGame (LC #55)
 * @param {number[]} nums
 * @returns {boolean}
 */
export function jumpGame(nums) {
  let reach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > reach) return false;
    reach = Math.max(reach, i + nums[i]);
  }
  return true;
}
