export class MinHeap {
  /** @type {number[]} */
  #data = [];

  get size() {
    return this.#data.length;
  }

  /** @param {number} v */
  push(v) {
    this.#data.push(v);
    this.#bubbleUp(this.#data.length - 1);
  }

  /** @returns {number} */
  pop() {
    const top = this.#data[0];
    const last = this.#data.pop();
    if (this.#data.length) {
      this.#data[0] = last;
      this.#sinkDown(0);
    }
    return top;
  }

  /** @returns {number} */
  peek() {
    return this.#data[0];
  }

  /** @param {number} i */
  #bubbleUp(i) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.#data[p] <= this.#data[i]) break;
      [this.#data[p], this.#data[i]] = [this.#data[i], this.#data[p]];
      i = p;
    }
  }

  /** @param {number} i */
  #sinkDown(i) {
    const n = this.#data.length;
    while (true) {
      let m = i;
      const l = 2 * i + 1,
        r = 2 * i + 2;
      if (l < n && this.#data[l] < this.#data[m]) m = l;
      if (r < n && this.#data[r] < this.#data[m]) m = r;
      if (m === i) break;
      [this.#data[m], this.#data[i]] = [this.#data[i], this.#data[m]];
      i = m;
    }
  }
}
