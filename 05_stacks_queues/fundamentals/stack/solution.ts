export class Stack<T> {
  private data: T[] = [];
  push(val: T): void      { this.data.push(val); }
  pop(): T                { return this.data.pop()!; }
  peek(): T               { return this.data[this.data.length - 1]; }
  isEmpty(): boolean      { return this.data.length === 0; }
  get size(): number      { return this.data.length; }
}
