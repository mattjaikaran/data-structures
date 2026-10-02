import { MaxHeap } from '../../fundamentals/max_heap/solution.ts';
import { MinHeap } from '../../fundamentals/min_heap/solution.ts';

export class MedianFinder {
  lo = new MaxHeap(); hi = new MinHeap();
  addNum(n: number): void {
    this.lo.push(n);
    this.hi.push(this.lo.pop());
    if (this.hi.size > this.lo.size) this.lo.push(this.hi.pop());
  }
  findMedian(): number {
    return this.lo.size > this.hi.size ? this.lo.peek() : (this.lo.peek() + this.hi.peek()) / 2;
  }
}
