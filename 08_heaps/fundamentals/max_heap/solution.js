import { MinHeap } from '../../fundamentals/min_heap/solution.js';

export class MaxHeap {
  /** @type {MinHeap} */
  #h = new MinHeap();

  /** @param {number} v */
  push(v) {
    this.#h.push(-v);
  }

  /** @returns {number} */
  pop() {
    return -this.#h.pop();
  }

  /** @returns {number} */
  peek() {
    return -this.#h.peek();
  }

  get size() {
    return this.#h.size;
  }
}
