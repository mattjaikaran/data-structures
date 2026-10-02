import { MinHeap } from '../../fundamentals/min_heap/solution.js';

/** 🟡 Kth Largest Element (LC #215)
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
export function kthLargest(nums, k) {
  const h = new MinHeap();
  for (const n of nums) {
    h.push(n);
    if (h.size > k) h.pop();
  }
  return h.peek();
}
