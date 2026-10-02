/**
 * 🟡 Total Hamming Distance (LC #477) — ones*zeros per bit
 * @param {number[]} nums
 * @returns {number}
 */
export const totalHammingDistance = (nums) => {
  let total = 0;
  for (let bit = 0; bit < 32; bit++) {
    const ones = nums.filter((n) => (n >> bit) & 1).length;
    total += ones * (nums.length - ones);
  }
  return total;
};
