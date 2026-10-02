export function coinChangeWays(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(0); dp[0] = 1;
  for (const c of coins) for (let a = c; a <= amount; a++) dp[a] += dp[a-c];
  return dp[amount];
}
