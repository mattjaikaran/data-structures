import { DoublyLinkedList, DNode } from '../../fundamentals/doubly_linked_list/solution.ts';

export class LRUCache {
  private cap: number;
  private map: Map<number, DNode>;
  private list: DoublyLinkedList;

  constructor(capacity: number) {
    this.cap = capacity;
    this.map = new Map();
    this.list = new DoublyLinkedList();
  }

  get(key: number): number {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key)!;
    this.list.removeNode(node);
    const fresh = this.list.appendFront(key, node.val);
    this.map.set(key, fresh);
    return node.val;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) this.list.removeNode(this.map.get(key)!);
    else if (this.list.size === this.cap) {
      const lru = this.list.removeBack();
      this.map.delete(lru.key);
    }
    const node = this.list.appendFront(key, value);
    this.map.set(key, node);
  }
}
