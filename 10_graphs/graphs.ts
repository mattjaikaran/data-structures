/**
 * GRAPHS  ·  TypeScript
 * Adjacency list, BFS, DFS, Dijkstra, Union-Find, topo sort + problems.
 */

class Graph {
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

class UnionFind {
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

// ── Problems ──────────────────────────────────
function numIslands(grid: string[][]): number {
  const rows = grid.length, cols = grid[0].length; let count = 0;
  const dfs = (r: number, c: number) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== '1') return;
    grid[r][c] = '0';
    for (const [dr, dc] of [[0,1],[0,-1],[1,0],[-1,0]]) dfs(r+dr, c+dc);
  };
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) if (grid[r][c]==='1') { dfs(r,c); count++; }
  return count;
}

function canFinish(n: number, prereqs: number[][]): boolean {
  const adj: number[][] = Array.from({length: n}, () => []);
  prereqs.forEach(([a,b]) => adj[b].push(a));
  const state = new Array(n).fill(0);
  const dfs = (u: number): boolean => {
    if (state[u] === 1) return false; if (state[u] === 2) return true;
    state[u] = 1; for (const v of adj[u]) if (!dfs(v)) return false;
    state[u] = 2; return true;
  };
  return Array.from({length: n}, (_, i) => i).every(dfs);
}

function findOrder(n: number, prereqs: number[][]): number[] {
  const adj: number[][] = Array.from({length: n}, () => []);
  const indegree = new Array(n).fill(0);
  prereqs.forEach(([a,b]) => { adj[b].push(a); indegree[a]++; });
  const q = Array.from({length: n}, (_, i) => i).filter(i => indegree[i] === 0);
  const order: number[] = [];
  while (q.length) { const u = q.shift()!; order.push(u); for (const v of adj[u]) { if (--indegree[v] === 0) q.push(v); } }
  return order.length === n ? order : [];
}

function networkDelay(times: number[][], n: number, k: number): number {
  const adj: [number,number][][] = Array.from({length: n+1}, () => []);
  times.forEach(([u,v,w]) => adj[u].push([v,w]));
  const dist = new Array(n+1).fill(Infinity); dist[k] = 0;
  const pq: [number,number][] = [[0,k]];
  while (pq.length) {
    pq.sort((a,b) => a[0]-b[0]);
    const [d,u] = pq.shift()!;
    if (d > dist[u]) continue;
    for (const [v,w] of adj[u]) { if (d+w < dist[v]) { dist[v]=d+w; pq.push([d+w,v]); } }
  }
  const max = Math.max(...dist.slice(1));
  return max === Infinity ? -1 : max;
}

function wordLadder(begin: string, end: string, wordList: string[]): number {
  const words = new Set(wordList);
  if (!words.has(end)) return 0;
  const q: [string, number][] = [[begin, 1]];
  while (q.length) {
    const [word, steps] = q.shift()!;
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const nw = word.slice(0,i) + String.fromCharCode(c) + word.slice(i+1);
        if (nw === end) return steps + 1;
        if (words.has(nw)) { words.delete(nw); q.push([nw, steps+1]); }
      }
    }
  }
  return 0;
}

// ── Tests ─────────────────────────────────────
function assert(c: boolean, m: string) { if (!c) throw new Error(`FAIL: ${m}`); }

function runTests() {
  console.log("Running graph tests...\n");

  const g = new Graph();
  [[0,1],[0,2],[1,3],[2,4]].forEach(([u,v]) => g.addEdge(u,v));
  assert(new Set(g.bfs(0)).size===5,"bfs visits all");
  assert(g.bfs(0)[0]===0,"bfs starts at src");
  console.log("  ✅ BFS");

  assert(new Set(g.dfs(0)).size===5,"dfs visits all");
  console.log("  ✅ DFS");

  const wg = new Graph();
  [[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5]].forEach(([u,v,w]) => wg.addEdge(u,v,w));
  assert(wg.dijkstra(0).get(3)===4,"dijkstra");
  console.log("  ✅ Dijkstra");

  const dag = new Graph(true);
  [[5,2],[5,0],[4,0],[4,1],[2,3],[3,1]].forEach(([u,v]) => dag.addEdge(u,v));
  assert(dag.topoSort().length===6,"topo sort");
  console.log("  ✅ topoSort");

  const uf = new UnionFind(5);
  uf.union(0,1); uf.union(2,3);
  assert(uf.connected(0,1)&&!uf.connected(0,2),"uf union/find");
  assert(uf.components===3,"uf components");
  console.log("  ✅ UnionFind");

  assert(numIslands([["1","1","0"],["0","1","0"],["0","0","1"]])===2,"islands");
  console.log("  ✅ numIslands");

  assert(canFinish(2,[[1,0]])&&!canFinish(2,[[1,0],[0,1]]),"canFinish");
  console.log("  ✅ canFinish");

  const order = findOrder(4,[[1,0],[2,0],[3,1],[3,2]]);
  assert(order.length===4,"findOrder");
  console.log("  ✅ findOrder");

  assert(networkDelay([[2,1,1],[2,3,1],[3,4,1]],4,2)===2,"networkDelay");
  console.log("  ✅ networkDelay");

  assert(wordLadder("hit","cog",["hot","dot","dog","lot","log","cog"])===5,"wordLadder");
  console.log("  ✅ wordLadder");

  console.log("\n🎉 All graph tests passed!");
}
runTests();
export { Graph, UnionFind, numIslands, canFinish, findOrder, networkDelay, wordLadder };
