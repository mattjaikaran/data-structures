/**
 * HEAPS  ·  TypeScript
 * Min/Max heap + top-K patterns, MedianFinder, task scheduler.
 */
export class MinHeap {
  private data: number[] = [];
  get size() { return this.data.length; }
  push(v: number): void { this.data.push(v); this.bubbleUp(this.data.length - 1); }
  pop(): number | undefined {
    const top = this.data[0]; const last = this.data.pop()!;
    if (this.data.length) { this.data[0] = last; this.sinkDown(0); }
    return top;
  }
  peek(): number | undefined { return this.data[0]; }
  private bubbleUp(i: number): void {
    while (i > 0) { const p = (i-1)>>1; if (this.data[p] <= this.data[i]) break; [this.data[p],this.data[i]]=[this.data[i],this.data[p]]; i=p; }
  }
  private sinkDown(i: number): void {
    const n = this.data.length;
    while (true) { let m = i; const l=2*i+1,r=2*i+2; if(l<n&&this.data[l]<this.data[m])m=l; if(r<n&&this.data[r]<this.data[m])m=r; if(m===i)break; [this.data[m],this.data[i]]=[this.data[i],this.data[m]]; i=m; }
  }
}
