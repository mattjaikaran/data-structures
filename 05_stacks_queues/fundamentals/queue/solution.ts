export class Queue<T> {
  private inbox: T[] = [];
  private outbox: T[] = [];
  enqueue(val: T): void { this.inbox.push(val); }
  dequeue(): T {
    if (!this.outbox.length) while (this.inbox.length) this.outbox.push(this.inbox.pop()!);
    return this.outbox.pop()!;
  }
  peek(): T {
    if (!this.outbox.length) while (this.inbox.length) this.outbox.push(this.inbox.pop()!);
    return this.outbox[this.outbox.length - 1];
  }
  isEmpty(): boolean { return !this.inbox.length && !this.outbox.length; }
}
