import { MaxHeap } from '../../fundamentals/max_heap/solution.ts';
import { MinHeap } from '../../fundamentals/min_heap/solution.ts';

export class MedianFinder {
  lo = new MaxHeap(); hi = new MinHeap();
  addNum(n: number): void {
    this.lo.push(n);
    this.hi.push(this.lo.pop()!); // The preceding push guarantees a value.
    if (this.hi.size > this.lo.size) this.lo.push(this.hi.pop()!);
  }
  findMedian(): number {
    const lower = this.lo.peek();
    if (lower === undefined) return NaN;
    return this.lo.size > this.hi.size ? lower : (lower + this.hi.peek()!) / 2;
  }
}
