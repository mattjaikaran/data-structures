export class UnionFind {
  parent: number[]; rank: number[]; components: number;
  constructor(n: number) { this.parent = Array.from({length: n}, (_, i) => i); this.rank = new Array(n).fill(0); this.components = n; }
  find(x: number): number { if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]); return this.parent[x]; }
  union(x: number, y: number): boolean {
    let [px, py] = [this.find(x), this.find(y)];
    if (px === py) return false;
    if (this.rank[px] < this.rank[py]) [px, py] = [py, px];
    this.parent[py] = px;
    if (this.rank[px] === this.rank[py]) this.rank[px]++;
    this.components--; return true;
  }
  connected(x: number, y: number): boolean { return this.find(x) === this.find(y); }
}
