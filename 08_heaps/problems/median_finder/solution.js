import { MaxHeap } from '../../fundamentals/max_heap/solution.js';
import { MinHeap } from '../../fundamentals/min_heap/solution.js';

/** 🔴 Find Median from Data Stream (LC #295) */
export class MedianFinder {
  constructor() {
    this.lo = new MaxHeap();
    this.hi = new MinHeap();
  }

  /** @param {number} n */
  addNum(n) {
    this.lo.push(n);
    this.hi.push(this.lo.pop());
    if (this.hi.size > this.lo.size) this.lo.push(this.hi.pop());
  }

  /** @returns {number} */
  findMedian() {
    return this.lo.size > this.hi.size
      ? this.lo.peek()
      : (this.lo.peek() + this.hi.peek()) / 2;
  }
}
