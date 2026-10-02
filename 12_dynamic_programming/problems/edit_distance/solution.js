/**
 * 🔴 editDistance (LC #72)
 * @param {string} w1
 * @param {string} w2
 * @returns {number}
 */
export function editDistance(w1, w2) {
  const [m,n]=[w1.length,w2.length];
  const dp=Array.from({length:m+1},(_,i)=>Array.from({length:n+1},(_,j)=>i||j));
  dp[0][0]=0;
  for(let i=1;i<=m;i++) for(let j=1;j<=n;j++)
    dp[i][j]=w1[i-1]===w2[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
  return dp[m][n];
}
