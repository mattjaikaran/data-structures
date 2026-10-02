export function numDistinct(s: string, t: string): number {
  const n = t.length; const dp = new Array(n + 1).fill(0); dp[0] = 1;
  for (const c of s) for (let j = n; j > 0; j--) if (c === t[j-1]) dp[j] += dp[j-1];
  return dp[n];
}
