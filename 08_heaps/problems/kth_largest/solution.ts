import { MinHeap } from '../../fundamentals/min_heap/solution.ts';

export function kthLargest(nums: number[], k: number): number {
  const h = new MinHeap();
  for (const n of nums) { h.push(n); if (h.size > k) h.pop(); }
  return h.peek();
}
