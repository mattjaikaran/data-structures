import { MinHeap } from '../../fundamentals/min_heap/solution.ts';

export class MaxHeap {
  private h = new MinHeap();
  push(v: number): void { this.h.push(-v); }
  pop(): number | undefined {
    const value = this.h.pop();
    return value === undefined ? undefined : -value;
  }
  peek(): number | undefined {
    const value = this.h.peek();
    return value === undefined ? undefined : -value;
  }
  get size() { return this.h.size; }
}
