/**
 * 🟢 Counting Bits (LC #338) — dp[i] = dp[i>>1] + (i&1)
 * @param {number} n
 * @returns {number[]}
 */
export const countBitsRange = (n) => {
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) dp[i] = dp[i >> 1] + (i & 1);
  return dp;
};
