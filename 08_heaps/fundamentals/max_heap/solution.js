import { MinHeap } from '../../fundamentals/min_heap/solution.js';

export class MaxHeap {
  /** @type {MinHeap} */
  #h = new MinHeap();

  /** @param {number} v */
  push(v) {
    this.#h.push(-v);
  }

  /** @returns {number | undefined} */
  pop() {
    const value = this.#h.pop();
    return value === undefined ? undefined : -value;
  }

  /** @returns {number | undefined} */
  peek() {
    const value = this.#h.peek();
    return value === undefined ? undefined : -value;
  }

  get size() {
    return this.#h.size;
  }
}
