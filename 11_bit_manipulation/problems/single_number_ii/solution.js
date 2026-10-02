/**
 * 🟡 Single Number II (LC #137) — count each bit mod 3
 * @param {number[]} nums
 * @returns {number}
 */
export const singleNumberII = (nums) => {
  let [ones, twos] = [0, 0];
  for (const n of nums) {
    ones = (ones ^ n) & ~twos;
    twos = (twos ^ n) & ~ones;
  }
  return ones;
};
