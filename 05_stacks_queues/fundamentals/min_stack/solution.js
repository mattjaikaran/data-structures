export class MinStack {
  /** @type {number[]} */
  #stack = [];
  /** @type {number[]} */
  #mins = [];

  /** @param {number} val */
  push(val) {
    this.#stack.push(val);
    this.#mins.push(
      this.#mins.length ? Math.min(val, this.#mins[this.#mins.length - 1]) : val
    );
  }

  /** @returns {number} */
  pop() {
    this.#mins.pop();
    return this.#stack.pop();
  }

  /** @returns {number} */
  top() {
    return this.#stack[this.#stack.length - 1];
  }

  /** @returns {number} */
  getMin() {
    return this.#mins[this.#mins.length - 1];
  }
}
