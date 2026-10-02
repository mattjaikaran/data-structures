/**
 * 🟡 Single Number III (LC #260) — two uniques, split by diff bit
 * @param {number[]} nums
 * @returns {[number, number]}
 */
export const singleNumberIII = (nums) => {
  const xor = nums.reduce((a, b) => a ^ b, 0);
  const diff = xor & -xor;
  let [a, b] = [0, 0];
  for (const n of nums) {
    if (n & diff) a ^= n;
    else b ^= n;
  }
  return [a, b];
};
