export class UnionFind {
  /** @type {number[]} */
  parent;
  /** @type {number[]} */
  rank;
  /** @type {number} */
  components;

  /**
   * @param {number} n
   */
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
    this.components = n;
  }

  /**
   * @param {number} x
   * @returns {number}
   */
  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }

  /**
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   */
  union(x, y) {
    let [px, py] = [this.find(x), this.find(y)];
    if (px === py) return false;
    if (this.rank[px] < this.rank[py]) [px, py] = [py, px];
    this.parent[py] = px;
    if (this.rank[px] === this.rank[py]) this.rank[px]++;
    this.components--;
    return true;
  }

  /**
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   */
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}
