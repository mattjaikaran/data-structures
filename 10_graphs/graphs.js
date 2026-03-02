"use strict";
/**
 * GRAPHS  ·  JavaScript
 * Adjacency list, BFS, DFS, Dijkstra, Union-Find, topo sort + problems.
 */

// ┌─────────────────────────────────────────────┐
// │ TABLE OF CONTENTS                           │
// ├─────────────────────────────────────────────┤
// │ 1. Graph class                              │
// │ 2. UnionFind class                          │
// │ 3. Problems                                 │
// │    - numIslands                  (LC #200) 🟡│
// │    - canFinish                   (LC #207) 🟡│
// │    - findOrder                    (LC #210) 🟡│
// │    - networkDelay                 (LC #743) 🟡│
// │    - wordLadder                   (LC #127) 🔴│
// │ 4. Tests                                    │
// └─────────────────────────────────────────────┘

// ══════════════════════════════════════
// ── Graph class ──────────────────────
// ══════════════════════════════════════

class Graph {
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

// ══════════════════════════════════════
// ── UnionFind class ──────────────────────
// ══════════════════════════════════════

class UnionFind {
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

// ══════════════════════════════════════
// ── Problems ──────────────────────
// ══════════════════════════════════════

/**
 * 🟡 Number of Islands (LC #200)
 * @param {string[][]} grid
 * @returns {number}
 */
function numIslands(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;
  const dfs = (r, c) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== "1") return;
    grid[r][c] = "0";
    for (const [dr, dc] of [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ])
      dfs(r + dr, c + dc);
  };
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      if (grid[r][c] === "1") {
        dfs(r, c);
        count++;
      }
  return count;
}

/**
 * 🟡 Course Schedule (LC #207) — cycle detection
 * @param {number} n
 * @param {number[][]} prereqs
 * @returns {boolean}
 */
function canFinish(n, prereqs) {
  const adj = Array.from({ length: n }, () => []);
  prereqs.forEach(([a, b]) => adj[b].push(a));
  const state = new Array(n).fill(0);
  const dfs = (u) => {
    if (state[u] === 1) return false;
    if (state[u] === 2) return true;
    state[u] = 1;
    for (const v of adj[u]) if (!dfs(v)) return false;
    state[u] = 2;
    return true;
  };
  return Array.from({ length: n }, (_, i) => i).every(dfs);
}

/**
 * 🟡 Course Schedule II (LC #210) — topological order
 * @param {number} n
 * @param {number[][]} prereqs
 * @returns {number[]}
 */
function findOrder(n, prereqs) {
  const adj = Array.from({ length: n }, () => []);
  const indegree = new Array(n).fill(0);
  prereqs.forEach(([a, b]) => {
    adj[b].push(a);
    indegree[a]++;
  });
  const q = Array.from({ length: n }, (_, i) => i).filter((i) => indegree[i] === 0);
  const order = [];
  while (q.length) {
    const u = q.shift();
    order.push(u);
    for (const v of adj[u]) {
      if (--indegree[v] === 0) q.push(v);
    }
  }
  return order.length === n ? order : [];
}

/**
 * 🟡 Network Delay Time (LC #743) — Dijkstra
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
function networkDelay(times, n, k) {
  const adj = Array.from({ length: n + 1 }, () => []);
  times.forEach(([u, v, w]) => adj[u].push([v, w]));
  const dist = new Array(n + 1).fill(Infinity);
  dist[k] = 0;
  const pq = [[0, k]];
  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [d, u] = pq.shift();
    if (d > dist[u]) continue;
    for (const [v, w] of adj[u]) {
      if (d + w < dist[v]) {
        dist[v] = d + w;
        pq.push([d + w, v]);
      }
    }
  }
  const max = Math.max(...dist.slice(1));
  return max === Infinity ? -1 : max;
}

/**
 * 🔴 Word Ladder (LC #127) — BFS shortest transformation
 * @param {string} begin
 * @param {string} end
 * @param {string[]} wordList
 * @returns {number}
 */
function wordLadder(begin, end, wordList) {
  const words = new Set(wordList);
  if (!words.has(end)) return 0;
  const q = [[begin, 1]];
  while (q.length) {
    const [word, steps] = q.shift();
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const nw = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (nw === end) return steps + 1;
        if (words.has(nw)) {
          words.delete(nw);
          q.push([nw, steps + 1]);
        }
      }
    }
  }
  return 0;
}

// ══════════════════════════════════════
// ── Tests ──────────────────────
// ══════════════════════════════════════

function runTests() {
  const g = new Graph();
  [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
  ].forEach(([u, v]) => g.addEdge(u, v));
  console.assert(new Set(g.bfs(0)).size === 5, "bfs visits all");
  console.assert(g.bfs(0)[0] === 0, "bfs starts at src");

  console.assert(new Set(g.dfs(0)).size === 5, "dfs visits all");

  const wg = new Graph();
  [
    [0, 1, 4],
    [0, 2, 1],
    [2, 1, 2],
    [1, 3, 1],
    [2, 3, 5],
  ].forEach(([u, v, w]) => wg.addEdge(u, v, w));
  console.assert(wg.dijkstra(0).get(3) === 4, "dijkstra");

  const dag = new Graph(true);
  [
    [5, 2],
    [5, 0],
    [4, 0],
    [4, 1],
    [2, 3],
    [3, 1],
  ].forEach(([u, v]) => dag.addEdge(u, v));
  console.assert(dag.topoSort().length === 6, "topo sort");

  const uf = new UnionFind(5);
  uf.union(0, 1);
  uf.union(2, 3);
  console.assert(uf.connected(0, 1) && !uf.connected(0, 2), "uf union/find");
  console.assert(uf.components === 3, "uf components");

  console.assert(numIslands([["1", "1", "0"], ["0", "1", "0"], ["0", "0", "1"]]) === 2, "islands");

  console.assert(canFinish(2, [[1, 0]]) && !canFinish(2, [[1, 0], [0, 1]]), "canFinish");

  const order = findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]);
  console.assert(order.length === 4, "findOrder");

  console.assert(networkDelay([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2) === 2, "networkDelay");

  console.assert(wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]) === 5, "wordLadder");

  console.log("✓ graphs — all tests passed");
}

runTests();
