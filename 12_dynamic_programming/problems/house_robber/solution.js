/**
 * 🟡 houseRobber (LC #198)
 * @param {number[]} nums
 * @returns {number}
 */
export function houseRobber(nums) {
  let [a, b] = [0, 0];
  for (const n of nums) [a, b] = [b, Math.max(b, a + n)];
  return b;
}
