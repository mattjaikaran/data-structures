export class SNode {
  /**
   * @param {number} val
   * @param {SNode | null} [next=null]
   */
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

export class SinglyLinkedList {
  /** @type {SNode | null} */
  head = null;
  /** @type {SNode | null} */
  tail = null;
  /** @type {number} */
  #size = 0;

  get size() { return this.#size; }

  /** @param {number} val */
  prepend(val) {
    const node = new SNode(val, this.head);
    this.head = node;
    if (!this.tail) this.tail = node;
    this.#size++;
  }

  /** @param {number} val */
  append(val) {
    const node = new SNode(val);
    if (this.tail) this.tail.next = node;
    else this.head = node;
    this.tail = node;
    this.#size++;
  }

  popFront() {
    if (!this.head) throw new Error("Empty list");
    const val = this.head.val;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.#size--;
    return val;
  }

  /** @param {number} val */
  removeValue(val) {
    if (!this.head) return false;
    if (this.head.val === val) { this.popFront(); return true; }
    let prev = this.head, cur = this.head.next;
    while (cur) {
      if (cur.val === val) {
        prev.next = cur.next;
        if (cur === this.tail) this.tail = prev;
        this.#size--;
        return true;
      }
      prev = cur;
      cur = cur.next;
    }
    return false;
  }

  reverse() {
    let prev = null, cur = this.head;
    this.tail = this.head;
    while (cur) {
      const nxt = cur.next;
      cur.next = prev;
      prev = cur;
      cur = nxt;
    }
    this.head = prev;
  }

  /** @returns {number[]} */
  toArray() {
    const result = [];
    let cur = this.head;
    while (cur) { result.push(cur.val); cur = cur.next; }
    return result;
  }
}

/** @param {number[]} vals */
export function fromArray(vals) {
  const dummy = new SNode(0);
  let cur = dummy;
  for (const v of vals) { cur.next = new SNode(v); cur = cur.next; }
  return dummy.next;
}

/** @param {SNode | null} head */
export function toArray(head) {
  const result = [];
  while (head) { result.push(head.val); head = head.next; }
  return result;
}
