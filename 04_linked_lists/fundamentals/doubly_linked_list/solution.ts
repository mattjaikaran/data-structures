export class DNode {
  key: number;
  val: number;
  prev: DNode | null = null;
  next: DNode | null = null;
  constructor(key = 0, val = 0) { this.key = key; this.val = val; }
}

export class DoublyLinkedList {
  private head: DNode;   // sentinel
  private tail: DNode;   // sentinel
  private _size = 0;

  constructor() {
    this.head = new DNode();
    this.tail = new DNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get size(): number { return this._size; }

  appendFront(key: number, val: number): DNode {
    return this.insertAfter(this.head, key, val);
  }

  /** O(1) removal of any node — the DLL superpower */
  removeNode(node: DNode): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
    this._size--;
  }

  removeBack(): DNode {
    const node = this.tail.prev!;
    this.removeNode(node);
    return node;
  }

  peekBack(): DNode { return this.tail.prev!; }

  private insertAfter(ref: DNode, key: number, val: number): DNode {
    const node = new DNode(key, val);
    node.prev = ref;
    node.next = ref.next;
    ref.next!.prev = node;
    ref.next = node;
    this._size++;
    return node;
  }
}
