/**
 * @template K
 * @template V
 */
export class HashMap {
  /** @type {[K, V][][]} */
  #buckets;
  /** @type {number} */
  #cap;
  size = 0;

  /** @param {number} [cap=16] */
  constructor(cap = 16) {
    this.#cap = cap;
    this.#buckets = Array.from({ length: cap }, () => []);
  }

  /**
   * @param {K} key
   * @returns {number}
   */
  #h(key) {
    return Math.abs(String(key).split("").reduce((a, c) => ((a << 5) - a) + c.charCodeAt(0), 0)) % this.#cap;
  }

  /**
   * @param {K} key
   * @param {V} val
   */
  put(key, val) {
    const b = this.#buckets[this.#h(key)];
    const i = b.findIndex(([k]) => k === key);
    if (i >= 0) b[i][1] = val;
    else { b.push([key, val]); this.size++; }
  }

  /**
   * @param {K} key
   * @returns {V | undefined}
   */
  get(key) {
    return this.#buckets[this.#h(key)].find(([k]) => k === key)?.[1];
  }

  /** @param {K} key */
  remove(key) {
    const b = this.#buckets[this.#h(key)];
    const i = b.findIndex(([k]) => k === key);
    if (i >= 0) { b.splice(i, 1); this.size--; }
  }

  /**
   * @param {K} key
   * @returns {boolean}
   */
  has(key) {
    return this.get(key) !== undefined;
  }
}
