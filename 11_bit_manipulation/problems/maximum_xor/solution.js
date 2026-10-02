/**
 * 🟡 Maximum XOR of Two Numbers (LC #421) — bit-by-bit greedy
 * @param {number[]} nums
 * @returns {number}
 */
export const maximumXOR = (nums) => {
  let [maxXor, prefix] = [0, 0];
  for (let i = 31; i >= 0; i--) {
    prefix |= 1 << i;
    const prefixes = new Set(nums.map((n) => n & prefix));
    const candidate = maxXor | (1 << i);
    if ([...prefixes].some((p) => prefixes.has(candidate ^ p))) maxXor = candidate;
  }
  return maxXor;
};
