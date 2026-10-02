import { MinHeap } from '../../fundamentals/min_heap/solution.ts';

export class MaxHeap {
  private h = new MinHeap();
  push(v: number): void { this.h.push(-v); }
  pop(): number { return -this.h.pop(); }
  peek(): number { return -this.h.peek(); }
  get size() { return this.h.size; }
}
