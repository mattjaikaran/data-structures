/** @template T */
export class Queue {
  /** @type {T[]} */
  #inbox = [];
  /** @type {T[]} */
  #outbox = [];

  /** @param {T} val */
  enqueue(val) {
    this.#inbox.push(val);
  }

  /** @returns {T} */
  dequeue() {
    if (!this.#outbox.length) {
      while (this.#inbox.length) this.#outbox.push(this.#inbox.pop());
    }
    return this.#outbox.pop();
  }

  /** @returns {T} */
  peek() {
    if (!this.#outbox.length) {
      while (this.#inbox.length) this.#outbox.push(this.#inbox.pop());
    }
    return this.#outbox[this.#outbox.length - 1];
  }

  /** @returns {boolean} */
  isEmpty() {
    return !this.#inbox.length && !this.#outbox.length;
  }
}
