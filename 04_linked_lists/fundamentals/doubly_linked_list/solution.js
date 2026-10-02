export class DNode {
  /**
   * @param {number} [key=0]
   * @param {number} [val=0]
   */
  constructor(key = 0, val = 0) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLinkedList {
  /** @type {DNode} */
  #head;
  /** @type {DNode} */
  #tail;
  /** @type {number} */
  #size = 0;

  constructor() {
    this.#head = new DNode();
    this.#tail = new DNode();
    this.#head.next = this.#tail;
    this.#tail.prev = this.#head;
  }

  get size() { return this.#size; }

  /**
   * @param {number} key
   * @param {number} val
   * @returns {DNode}
   */
  appendFront(key, val) {
    return this.#insertAfter(this.#head, key, val);
  }

  /** O(1) removal of any node — the DLL superpower */
  /** @param {DNode} node */
  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.#size--;
  }

  /** @returns {DNode} */
  removeBack() {
    const node = this.#tail.prev;
    this.removeNode(node);
    return node;
  }

  /** @returns {DNode} */
  peekBack() {
    return this.#tail.prev;
  }

  /**
   * @param {DNode} ref
   * @param {number} key
   * @param {number} val
   * @returns {DNode}
   */
  #insertAfter(ref, key, val) {
    const node = new DNode(key, val);
    node.prev = ref;
    node.next = ref.next;
    ref.next.prev = node;
    ref.next = node;
    this.#size++;
    return node;
  }
}
