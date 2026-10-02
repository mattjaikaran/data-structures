export class MinStack {
  private stack: number[] = [];
  private mins: number[] = [];
  push(val: number): void {
    this.stack.push(val);
    this.mins.push(this.mins.length ? Math.min(val, this.mins[this.mins.length - 1]) : val);
  }
  pop(): number { this.mins.pop(); return this.stack.pop()!; }
  top(): number  { return this.stack[this.stack.length - 1]; }
  getMin(): number { return this.mins[this.mins.length - 1]; }
}
