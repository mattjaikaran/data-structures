/**
 * @param {number[]} nums
 * @param {number} k
 */
export function subarraySumEqualsK(nums, k) {
  let count = 0, prefix = 0;
  const freq = new Map([[0, 1]]);
  for (const n of nums) {
    prefix += n;
    count += (freq.get(prefix - k) ?? 0);
    freq.set(prefix, (freq.get(prefix) ?? 0) + 1);
  }
  return count;
}
