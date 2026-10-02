export function lengthOfLIS(nums: number[]): number {
  const tails: number[] = [];
  for (const n of nums) {
    let lo = 0, hi = tails.length;
    while (lo < hi) { const mid = (lo+hi)>>1; tails[mid] < n ? lo=mid+1 : hi=mid; }
    tails[lo] = n;
  }
  return tails.length;
}
