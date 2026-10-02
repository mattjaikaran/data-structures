/**
 * GRAPHS  ·  TypeScript
 * Adjacency list, BFS, DFS, Dijkstra, Union-Find, topo sort + problems.
 */
export class Graph {
  adj: Map<number, [number, number][]> = new Map();
  directed: boolean;
  constructor(directed = false) { this.directed = directed; }

  addEdge(u: number, v: number, w = 1): void {
    if (!this.adj.has(u)) this.adj.set(u, []);
    if (!this.adj.has(v)) this.adj.set(v, []);
    this.adj.get(u)!.push([v, w]);
    if (!this.directed) this.adj.get(v)!.push([u, w]);
  }

  bfs(src: number): number[] {
    const visited = new Set([src]), order: number[] = [], q = [src];
    while (q.length) {
      const n = q.shift()!; order.push(n);
      for (const [nb] of this.adj.get(n) ?? []) { if (!visited.has(nb)) { visited.add(nb); q.push(nb); } }
    }
    return order;
  }

  dfs(src: number): number[] {
    const visited = new Set<number>(), order: number[] = [];
    const go = (n: number) => { visited.add(n); order.push(n); for (const [nb] of this.adj.get(n) ?? []) { if (!visited.has(nb)) go(nb); } };
    go(src); return order;
  }

  dijkstra(src: number): Map<number, number> {
    const dist = new Map<number, number>([[src, 0]]);
    const pq: [number, number][] = [[0, src]];
    while (pq.length) {
      pq.sort((a, b) => a[0] - b[0]);
      const [d, u] = pq.shift()!;
      if (d > (dist.get(u) ?? Infinity)) continue;
      for (const [v, w] of this.adj.get(u) ?? []) {
        const nd = d + w;
        if (nd < (dist.get(v) ?? Infinity)) { dist.set(v, nd); pq.push([nd, v]); }
      }
    }
    return dist;
  }

  topoSort(): number[] {
    const indegree = new Map<number, number>();
    for (const [u, edges] of this.adj) { if (!indegree.has(u)) indegree.set(u, 0); for (const [v] of edges) indegree.set(v, (indegree.get(v) ?? 0) + 1); }
    const q = [...indegree.entries()].filter(([, d]) => d === 0).map(([u]) => u);
    const order: number[] = [];
    while (q.length) {
      const u = q.shift()!; order.push(u);
      for (const [v] of this.adj.get(u) ?? []) { const d = (indegree.get(v) ?? 0) - 1; indegree.set(v, d); if (d === 0) q.push(v); }
    }
    return order.length === this.adj.size ? order : [];
  }
}
