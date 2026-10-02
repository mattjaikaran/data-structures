export class Graph {
  /** @type {Map<number, [number, number][]>} */
  adj = new Map();
  /** @type {boolean} */
  directed;

  /**
   * @param {boolean} [directed=false]
   */
  constructor(directed = false) {
    this.directed = directed;
  }

  /**
   * @param {number} u
   * @param {number} v
   * @param {number} [w=1]
   */
  addEdge(u, v, w = 1) {
    if (!this.adj.has(u)) this.adj.set(u, []);
    if (!this.adj.has(v)) this.adj.set(v, []);
    this.adj.get(u).push([v, w]);
    if (!this.directed) this.adj.get(v).push([u, w]);
  }

  /**
   * @param {number} src
   * @returns {number[]}
   */
  bfs(src) {
    const visited = new Set([src]);
    const order = [];
    const q = [src];
    while (q.length) {
      const n = q.shift();
      order.push(n);
      for (const [nb] of this.adj.get(n) ?? []) {
        if (!visited.has(nb)) {
          visited.add(nb);
          q.push(nb);
        }
      }
    }
    return order;
  }

  /**
   * @param {number} src
   * @returns {number[]}
   */
  dfs(src) {
    const visited = new Set();
    const order = [];
    const go = (n) => {
      visited.add(n);
      order.push(n);
      for (const [nb] of this.adj.get(n) ?? []) {
        if (!visited.has(nb)) go(nb);
      }
    };
    go(src);
    return order;
  }

  /**
   * @param {number} src
   * @returns {Map<number, number>}
   */
  dijkstra(src) {
    const dist = new Map([[src, 0]]);
    const pq = [[0, src]];
    while (pq.length) {
      pq.sort((a, b) => a[0] - b[0]);
      const [d, u] = pq.shift();
      if (d > (dist.get(u) ?? Infinity)) continue;
      for (const [v, w] of this.adj.get(u) ?? []) {
        const nd = d + w;
        if (nd < (dist.get(v) ?? Infinity)) {
          dist.set(v, nd);
          pq.push([nd, v]);
        }
      }
    }
    return dist;
  }

  /**
   * @returns {number[]}
   */
  topoSort() {
    const indegree = new Map();
    for (const [u, edges] of this.adj) {
      if (!indegree.has(u)) indegree.set(u, 0);
      for (const [v] of edges) indegree.set(v, (indegree.get(v) ?? 0) + 1);
    }
    const q = [...indegree.entries()].filter(([, d]) => d === 0).map(([u]) => u);
    const order = [];
    while (q.length) {
      const u = q.shift();
      order.push(u);
      for (const [v] of this.adj.get(u) ?? []) {
        const d = (indegree.get(v) ?? 0) - 1;
        indegree.set(v, d);
        if (d === 0) q.push(v);
      }
    }
    return order.length === this.adj.size ? order : [];
  }
}
