/** 🟡 Subarray Sum Equals K (LC #560) — O(n) time, O(n) space */
export function subarraySumK(nums: number[], k: number): number {
  let count = 0, prefix = 0;
  const freq = new Map<number, number>([[0, 1]]);
  for (const n of nums) {
    prefix += n;
    count += freq.get(prefix - k) ?? 0;
    freq.set(prefix, (freq.get(prefix) ?? 0) + 1);
  }
  return count;
}
