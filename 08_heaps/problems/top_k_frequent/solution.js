/** 🟡 Top K Frequent Elements (LC #347)
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
export function topKFrequent(nums, k) {
  const cnt = new Map();
  for (const n of nums) cnt.set(n, (cnt.get(n) ?? 0) + 1);
  return [...cnt.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([n]) => n);
}
