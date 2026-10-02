/**
 * 🟡 coinChange (LC #322)
 * @param {number[]} coins
 * @param {number} amount
 * @returns {number}
 */
export function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity); dp[0] = 0;
  for (let a = 1; a <= amount; a++)
    for (const c of coins) if (c <= a) dp[a] = Math.min(dp[a], dp[a-c] + 1);
  return dp[amount] === Infinity ? -1 : dp[amount];
}
