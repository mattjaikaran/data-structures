export class SNode {
  val: number;
  next: SNode | null = null;
  constructor(val: number, next: SNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export class SinglyLinkedList {
  head: SNode | null = null;
  tail: SNode | null = null;
  private _size = 0;

  get size(): number { return this._size; }

  prepend(val: number): void {
    const node = new SNode(val, this.head);
    this.head = node;
    if (!this.tail) this.tail = node;
    this._size++;
  }

  append(val: number): void {
    const node = new SNode(val);
    if (this.tail) this.tail.next = node;
    else this.head = node;
    this.tail = node;
    this._size++;
  }

  popFront(): number {
    if (!this.head) throw new Error("Empty list");
    const val = this.head.val;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this._size--;
    return val;
  }

  removeValue(val: number): boolean {
    if (!this.head) return false;
    if (this.head.val === val) { this.popFront(); return true; }
    let prev = this.head, cur = this.head.next;
    while (cur) {
      if (cur.val === val) {
        prev.next = cur.next;
        if (cur === this.tail) this.tail = prev;
        this._size--;
        return true;
      }
      prev = cur; cur = cur.next;
    }
    return false;
  }

  reverse(): void {
    let prev: SNode | null = null, cur = this.head;
    this.tail = this.head;
    while (cur) {
      const nxt = cur.next;
      cur.next = prev;
      prev = cur;
      cur = nxt;
    }
    this.head = prev;
  }

  toArray(): number[] {
    const result: number[] = [];
    let cur = this.head;
    while (cur) { result.push(cur.val); cur = cur.next; }
    return result;
  }
}

export function fromArray(vals: number[]): SNode | null {
  const dummy = new SNode(0);
  let cur = dummy;
  for (const v of vals) { cur.next = new SNode(v); cur = cur.next; }
  return dummy.next;
}

export function toArray(head: SNode | null): number[] {
  const result: number[] = [];
  while (head) { result.push(head.val); head = head.next; }
  return result;
}
