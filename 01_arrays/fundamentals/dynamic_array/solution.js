/**
 * @template T
 */
export class DynamicArray {
  /** @type {(T | undefined)[]} */
  #data;
  /** @type {number} */
  #size = 0;
  /** @type {number} */
  #cap;

  /** @param {number} [initialCap=4] */
  constructor(initialCap = 4) {
    this.#cap = initialCap;
    this.#data = new Array(initialCap);
  }

  get size() { return this.#size; }
  get capacity() { return this.#cap; }

  /**
   * @param {number} i
   * @returns {T}
   */
  get(i) {
    this.#checkBounds(i);
    return this.#data[i];
  }

  /**
   * @param {number} i
   * @param {T} val
   */
  set(i, val) {
    this.#checkBounds(i);
    this.#data[i] = val;
  }

  /** O(1) amortized */
  /** @param {T} val */
  append(val) {
    if (this.#size === this.#cap) this.#resize(this.#cap * 2);
    this.#data[this.#size++] = val;
  }

  /** O(n) */
  /**
   * @param {number} i
   * @param {T} val
   */
  insert(i, val) {
    if (i < 0 || i > this.#size) throw new RangeError(`Index ${i} out of range`);
    if (this.#size === this.#cap) this.#resize(this.#cap * 2);
    for (let j = this.#size; j > i; j--) this.#data[j] = this.#data[j - 1];
    this.#data[i] = val;
    this.#size++;
  }

  /** O(n) */
  /**
   * @param {number} i
   * @returns {T}
   */
  removeAt(i) {
    this.#checkBounds(i);
    const val = this.#data[i];
    for (let j = i; j < this.#size - 1; j++) this.#data[j] = this.#data[j + 1];
    this.#data[--this.#size] = undefined;
    return val;
  }

  /** @returns {T[]} */
  toArray() {
    return Array.from({ length: this.#size }, (_, i) => this.#data[i]);
  }

  /** @param {number} newCap */
  #resize(newCap) {
    const next = new Array(newCap);
    for (let i = 0; i < this.#size; i++) next[i] = this.#data[i];
    this.#data = next;
    this.#cap = newCap;
  }

  /** @param {number} i */
  #checkBounds(i) {
    if (i < 0 || i >= this.#size) throw new RangeError(`Index ${i} out of range`);
  }
}
