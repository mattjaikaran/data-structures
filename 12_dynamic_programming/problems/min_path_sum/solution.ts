export function minPathSum(grid: number[][]): number {
  const [m,n] = [grid.length, grid[0].length];
  const dp = grid.map(r=>[...r]);
  for(let r=1;r<m;r++) dp[r][0]+=dp[r-1][0];
  for(let c=1;c<n;c++) dp[0][c]+=dp[0][c-1];
  for(let r=1;r<m;r++) for(let c=1;c<n;c++) dp[r][c]+=Math.min(dp[r-1][c],dp[r][c-1]);
  return dp[m-1][n-1];
}
