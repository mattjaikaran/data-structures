/** @template T */
export class Stack {
  /** @type {T[]} */
  #data = [];

  /** @param {T} val */
  push(val) {
    this.#data.push(val);
  }

  /** @returns {T} */
  pop() {
    return this.#data.pop();
  }

  /** @returns {T} */
  peek() {
    return this.#data[this.#data.length - 1];
  }

  /** @returns {boolean} */
  isEmpty() {
    return this.#data.length === 0;
  }

  /** @returns {number} */
  get size() {
    return this.#data.length;
  }
}
