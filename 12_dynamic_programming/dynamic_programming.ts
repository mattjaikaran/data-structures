/**
 * DYNAMIC PROGRAMMING  ·  TypeScript
 * Same problems as the Python file. Reference that file for full explanations.
 */

// ── 1D Linear ─────────────────────────────────
function climbingStairs(n: number): number {
  if (n <= 2) return n;
  let [a, b] = [1, 2];
  for (let i = 3; i <= n; i++) [a, b] = [b, a + b];
  return b;
}

function houseRobber(nums: number[]): number {
  let [a, b] = [0, 0];
  for (const n of nums) [a, b] = [b, Math.max(b, a + n)];
  return b;
}

function houseRobberII(nums: number[]): number {
  const rob = (arr: number[]) => { let [a,b]=[0,0]; for(const n of arr)[a,b]=[b,Math.max(b,a+n)]; return b; };
  return Math.max(nums[0], rob(nums.slice(0,-1)), rob(nums.slice(1)));
}

function jumpGame(nums: number[]): boolean {
  let reach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > reach) return false;
    reach = Math.max(reach, i + nums[i]);
  }
  return true;
}

function jumpGameII(nums: number[]): number {
  let [jumps, curEnd, curFar] = [0, 0, 0];
  for (let i = 0; i < nums.length - 1; i++) {
    curFar = Math.max(curFar, i + nums[i]);
    if (i === curEnd) { jumps++; curEnd = curFar; }
  }
  return jumps;
}

function wordBreak(s: string, wordDict: string[]): boolean {
  const words = new Set(wordDict);
  const dp = new Array(s.length + 1).fill(false); dp[0] = true;
  for (let i = 1; i <= s.length; i++)
    for (let j = 0; j < i; j++)
      if (dp[j] && words.has(s.slice(j, i))) { dp[i] = true; break; }
  return dp[s.length];
}

function decodeWays(s: string): number {
  if (!s || s[0] === '0') return 0;
  const n = s.length;
  const dp = new Array(n + 1).fill(0); dp[0] = dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    if (s[i-1] !== '0') dp[i] += dp[i-1];
    const two = parseInt(s.slice(i-2, i));
    if (two >= 10 && two <= 26) dp[i] += dp[i-2];
  }
  return dp[n];
}

function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity); dp[0] = 0;
  for (let a = 1; a <= amount; a++)
    for (const c of coins) if (c <= a) dp[a] = Math.min(dp[a], dp[a-c] + 1);
  return dp[amount] === Infinity ? -1 : dp[amount];
}

function coinChangeWays(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(0); dp[0] = 1;
  for (const c of coins) for (let a = c; a <= amount; a++) dp[a] += dp[a-c];
  return dp[amount];
}

function lengthOfLIS(nums: number[]): number {
  const tails: number[] = [];
  for (const n of nums) {
    let lo = 0, hi = tails.length;
    while (lo < hi) { const mid = (lo+hi)>>1; tails[mid] < n ? lo=mid+1 : hi=mid; }
    tails[lo] = n;
  }
  return tails.length;
}

function maxProduct(nums: number[]): number {
  let [best, curMax, curMin] = [nums[0], nums[0], nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const [a, b] = [curMax, curMin];
    curMax = Math.max(nums[i], a*nums[i], b*nums[i]);
    curMin = Math.min(nums[i], a*nums[i], b*nums[i]);
    best = Math.max(best, curMax);
  }
  return best;
}

// ── 2D ────────────────────────────────────────
function uniquePaths(m: number, n: number): number {
  const dp = Array.from({length:m}, ()=>new Array(n).fill(1));
  for (let r=1;r<m;r++) for(let c=1;c<n;c++) dp[r][c]=dp[r-1][c]+dp[r][c-1];
  return dp[m-1][n-1];
}

function minPathSum(grid: number[][]): number {
  const [m,n] = [grid.length, grid[0].length];
  const dp = grid.map(r=>[...r]);
  for(let r=1;r<m;r++) dp[r][0]+=dp[r-1][0];
  for(let c=1;c<n;c++) dp[0][c]+=dp[0][c-1];
  for(let r=1;r<m;r++) for(let c=1;c<n;c++) dp[r][c]+=Math.min(dp[r-1][c],dp[r][c-1]);
  return dp[m-1][n-1];
}

function longestCommonSubsequence(s1: string, s2: string): number {
  const [m,n] = [s1.length, s2.length];
  const dp = Array.from({length:m+1},()=>new Array(n+1).fill(0));
  for(let i=1;i<=m;i++) for(let j=1;j<=n;j++)
    dp[i][j] = s1[i-1]===s2[j-1] ? dp[i-1][j-1]+1 : Math.max(dp[i-1][j],dp[i][j-1]);
  return dp[m][n];
}

function editDistance(w1: string, w2: string): number {
  const [m,n]=[w1.length,w2.length];
  const dp=Array.from({length:m+1},(_,i)=>Array.from({length:n+1},(_,j)=>i||j));
  dp[0][0]=0;
  for(let i=1;i<=m;i++) for(let j=1;j<=n;j++)
    dp[i][j]=w1[i-1]===w2[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
  return dp[m][n];
}

function longestPalindromicSubstring(s: string): string {
  let [res, resLen] = ['', 0];
  for (let i=0;i<s.length;i++) {
    for (const [start,end] of [[i,i],[i,i+1]]) {
      let [l,r]=[start,end];
      while(l>=0&&r<s.length&&s[l]===s[r]){l--;r++;}
      if(r-l-1>resLen){res=s.slice(l+1,r);resLen=r-l-1;}
    }
  }
  return res;
}

// ── Knapsack ──────────────────────────────────
function partitionEqualSubset(nums: number[]): boolean {
  const total = nums.reduce((a,b)=>a+b,0);
  if (total%2) return false;
  const target=total/2;
  const dp=new Set([0]);
  for(const n of nums){for(const s of [...dp]) dp.add(s+n); if(dp.has(target)) return true;}
  return dp.has(target);
}

function targetSum(nums: number[], target: number): number {
  let dp: Map<number,number> = new Map([[0,1]]);
  for(const n of nums){
    const ndp=new Map<number,number>();
    for(const [s,cnt] of dp){
      ndp.set(s+n,(ndp.get(s+n)??0)+cnt);
      ndp.set(s-n,(ndp.get(s-n)??0)+cnt);
    }
    dp=ndp;
  }
  return dp.get(target)??0;
}

// ── DP on Trees ───────────────────────────────
class TreeNode { val:number; left:TreeNode|null=null; right:TreeNode|null=null; constructor(v:number){this.val=v;} }

function houseRobberIII(root: TreeNode|null): number {
  const dp=(n:TreeNode|null):[number,number]=>{
    if(!n) return [0,0];
    const [lr,ls]=dp(n.left),[rr,rs]=dp(n.right);
    return [n.val+ls+rs, Math.max(lr,ls)+Math.max(rr,rs)];
  };
  return Math.max(...dp(root));
}

function numTrees(n: number): number {
  const dp=new Array(n+1).fill(0); dp[0]=dp[1]=1;
  for(let i=2;i<=n;i++) for(let j=1;j<=i;j++) dp[i]+=dp[j-1]*dp[i-j];
  return dp[n];
}

// ── Interval DP ───────────────────────────────
function burstBalloons(nums: number[]): number {
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

// ── State Machine ─────────────────────────────
function bestTimeCooldown(prices: number[]): number {
  let [held,sold,idle]=[-Infinity,0,0];
  for(const p of prices) [held,sold,idle]=[Math.max(held,idle-p),held+p,Math.max(idle,sold)];
  return Math.max(sold,idle);
}

function bestTimeWithFee(prices: number[], fee: number): number {
  let [cash,held]=[0,-prices[0]];
  for(let i=1;i<prices.length;i++){cash=Math.max(cash,held+prices[i]-fee);held=Math.max(held,cash-prices[i]);}
  return cash;
}

// ── Tests ─────────────────────────────────────
function assert(c:boolean,m:string){if(!c)throw new Error(`FAIL: ${m}`);}

function runTests(){
  console.log("Running DP tests...\n");

  assert(climbingStairs(5)===8&&climbingStairs(2)===2,"climbing");
  console.log("  ✅ climbingStairs");

  assert(houseRobber([2,7,9,3,1])===12&&houseRobber([1,2,3,1])===4,"robber");
  console.log("  ✅ houseRobber");

  assert(houseRobberII([2,3,2])===3&&houseRobberII([1,2,3,1])===4,"robber2");
  console.log("  ✅ houseRobberII");

  assert(jumpGame([2,3,1,1,4])&&!jumpGame([3,2,1,0,4]),"jumpGame");
  console.log("  ✅ jumpGame");

  assert(jumpGameII([2,3,1,1,4])===2,"jumpII");
  console.log("  ✅ jumpGameII");

  assert(wordBreak("leetcode",["leet","code"])&&!wordBreak("catsandog",["cats","dog","sand","and","cat"]),"wordBreak");
  console.log("  ✅ wordBreak");

  assert(decodeWays("12")===2&&decodeWays("226")===3&&decodeWays("06")===0,"decode");
  console.log("  ✅ decodeWays");

  assert(coinChange([1,5,11],15)===3&&coinChange([2],3)===-1,"coinChange");
  console.log("  ✅ coinChange");

  assert(coinChangeWays([1,2,5],5)===4,"coinWays");
  console.log("  ✅ coinChangeWays");

  assert(lengthOfLIS([10,9,2,5,3,7,101,18])===4,"lis");
  console.log("  ✅ lengthOfLIS");

  assert(uniquePaths(3,7)===28&&uniquePaths(3,2)===3,"uniquePaths");
  console.log("  ✅ uniquePaths");

  assert(minPathSum([[1,3,1],[1,5,1],[4,2,1]])===7,"minPath");
  console.log("  ✅ minPathSum");

  assert(longestCommonSubsequence("abcde","ace")===3&&longestCommonSubsequence("abc","def")===0,"lcs");
  console.log("  ✅ longestCommonSubsequence");

  assert(editDistance("horse","ros")===3&&editDistance("intention","execution")===5,"editDist");
  console.log("  ✅ editDistance");

  assert(["bab","aba"].includes(longestPalindromicSubstring("babad"))&&longestPalindromicSubstring("cbbd")==="bb","palindrome");
  console.log("  ✅ longestPalindromicSubstring");

  assert(partitionEqualSubset([1,5,11,5])&&!partitionEqualSubset([1,2,3,5]),"partition");
  console.log("  ✅ partitionEqualSubset");

  assert(targetSum([1,1,1,1,1],3)===5,"targetSum");
  console.log("  ✅ targetSum");

  assert(burstBalloons([3,1,5,8])===167,"burst");
  console.log("  ✅ burstBalloons");

  assert(numTrees(3)===5&&numTrees(1)===1,"numTrees");
  console.log("  ✅ numTrees");

  assert(bestTimeCooldown([1,2,3,0,2])===3,"cooldown");
  console.log("  ✅ bestTimeCooldown");

  assert(bestTimeWithFee([1,3,2,8,4,9],2)===8,"fee");
  console.log("  ✅ bestTimeWithFee");

  assert(maxProduct([2,3,-2,4])===6&&maxProduct([-2,3,-4])===24,"maxProduct");
  console.log("  ✅ maxProduct");

  console.log("\n🎉 All DP tests passed!");
}
runTests();
export { climbingStairs, houseRobber, houseRobberII, jumpGame, jumpGameII, wordBreak, decodeWays, coinChange, coinChangeWays, lengthOfLIS, uniquePaths, minPathSum, longestCommonSubsequence, editDistance, longestPalindromicSubstring, partitionEqualSubset, targetSum, burstBalloons, numTrees, bestTimeCooldown, bestTimeWithFee, maxProduct };
