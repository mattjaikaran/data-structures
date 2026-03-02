# Graphs

Graph = vertices + edges. Adjacency list uses O(V+E) space. BFS for shortest path (unweighted); DFS for cycles, topological sort, components. Dijkstra for weighted shortest path (non-negative edges). Union-Find for O(α) disjoint sets and cycle detection.

## Complexity

| Operation | Average | Worst |
|-----------|---------|-------|
| BFS / DFS | O(V + E) | O(V + E) |
| Dijkstra | O((V+E) log V) | O((V+E) log V) |
| Topological Sort | O(V + E) | O(V + E) |
| Union-Find (per op) | O(α(n)) | O(α(n)) |

## Key Patterns

- **BFS Shortest Path** — unweighted graphs; first visit = shortest
- **DFS Cycle Detection** — color nodes (white/gray/black) for directed graphs
- **Topological Sort** — Kahn's algorithm (indegree) or DFS post-order
- **Dijkstra** — min-heap of (dist, node); relax neighbors
- **Union-Find** — path compression + union by rank

## Problems Implemented

| Problem | Difficulty | LeetCode |
|---------|-----------|----------|
| Number of Islands | Medium | #200 |
| Course Schedule | Medium | #207 |
| Course Schedule II | Medium | #210 |
| Pacific Atlantic Water Flow | Medium | #417 |
| Network Delay Time | Medium | #743 |
| Min Cost to Connect All Points | Medium | #1584 |
| Word Ladder | Hard | #127 |
| Clone Graph | Medium | #133 |

## Implementations

| Language | File |
|----------|------|
| Python | [graphs.py](graphs.py) |
| JavaScript | [graphs.js](graphs.js) |
| TypeScript | [graphs.ts](graphs.ts) |
| Rust | [graphs.rs](graphs.rs) |
