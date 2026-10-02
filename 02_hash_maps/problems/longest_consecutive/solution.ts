export function longestConsecutive(nums: number[]): number {
  const s = new Set(nums); let best = 0;
  for (const n of s) { if (!s.has(n-1)) { let cur=n,len=1; while(s.has(cur+1)){cur++;len++;} best=Math.max(best,len); } }
  return best;
}
