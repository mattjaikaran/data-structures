/**
 * 🟡 uniquePaths (LC #62)
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
export function uniquePaths(m, n) {
  const dp = Array.from({length:m}, ()=>new Array(n).fill(1));
  for (let r=1;r<m;r++) for(let c=1;c<n;c++) dp[r][c]=dp[r-1][c]+dp[r][c-1];
  return dp[m-1][n-1];
}
