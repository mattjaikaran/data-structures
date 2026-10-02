import { DoublyLinkedList } from '../../fundamentals/doubly_linked_list/solution.js';

export class LRUCache {
  /** @type {number} */
  #cap;
  /** @type {Map<number, DNode>} */
  #map;
  /** @type {DoublyLinkedList} */
  #list;

  /** @param {number} capacity */
  constructor(capacity) {
    this.#cap = capacity;
    this.#map = new Map();
    this.#list = new DoublyLinkedList();
  }

  /** @param {number} key */
  get(key) {
    if (!this.#map.has(key)) return -1;
    const node = this.#map.get(key);
    this.#list.removeNode(node);
    const fresh = this.#list.appendFront(key, node.val);
    this.#map.set(key, fresh);
    return node.val;
  }

  /**
   * @param {number} key
   * @param {number} value
   */
  put(key, value) {
    if (this.#map.has(key)) this.#list.removeNode(this.#map.get(key));
    else if (this.#list.size === this.#cap) {
      const lru = this.#list.removeBack();
      this.#map.delete(lru.key);
    }
    const node = this.#list.appendFront(key, value);
    this.#map.set(key, node);
  }
}
