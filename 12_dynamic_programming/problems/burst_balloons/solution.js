/**
 * 🔴 burstBalloons (LC #312)
 * @param {number[]} nums
 * @returns {number}
 */
export function burstBalloons(nums) {
  const arr=[1,...nums,1], n=arr.length;
  const dp=Array.from({length:n},()=>new Array(n).fill(0));
  for(let len=2;len<n;len++)
    for(let l=0;l<n-len;l++){
      const r=l+len;
      for(let k=l+1;k<r;k++)
        dp[l][r]=Math.max(dp[l][r],arr[l]*arr[k]*arr[r]+dp[l][k]+dp[k][r]);
    }
  return dp[0][n-1];
}
