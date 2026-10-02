# Graphs

Start with fundamentals. Choose a problem and use its private start/attempt
commands. Read JavaScript to learn the algorithm, then write Python from your
explanation. Keep public references unchanged. Add TypeScript and Rust later.

Verify all available reference exercises for this topic with:

```bash
npm run practice -- 10_graphs py
```

## Fundamentals

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [graph](fundamentals/graph/README.md) | [js](fundamentals/graph/solution.js) | [py](fundamentals/graph/solution.py) | [ts](fundamentals/graph/solution.ts) | [rs](fundamentals/graph/solution.rs) |
| [union find](fundamentals/union_find/README.md) | [js](fundamentals/union_find/solution.js) | [py](fundamentals/union_find/solution.py) | [ts](fundamentals/union_find/solution.ts) | [rs](fundamentals/union_find/solution.rs) |

## Problems

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [num islands](problems/num_islands/README.md) | [js](problems/num_islands/solution.js) | [py](problems/num_islands/solution.py) | [ts](problems/num_islands/solution.ts) | [rs](problems/num_islands/solution.rs) |
| [can finish](problems/can_finish/README.md) | [js](problems/can_finish/solution.js) | [py](problems/can_finish/solution.py) | [ts](problems/can_finish/solution.ts) | [rs](problems/can_finish/solution.rs) |
| [find order](problems/find_order/README.md) | [js](problems/find_order/solution.js) | [py](problems/find_order/solution.py) | [ts](problems/find_order/solution.ts) | [rs](problems/find_order/solution.rs) |
| [network delay](problems/network_delay/README.md) | [js](problems/network_delay/solution.js) | [py](problems/network_delay/solution.py) | [ts](problems/network_delay/solution.ts) | [rs](problems/network_delay/solution.rs) |
| [word ladder](problems/word_ladder/README.md) | [js](problems/word_ladder/solution.js) | [py](problems/word_ladder/solution.py) | [ts](problems/word_ladder/solution.ts) | — |
| [pacific atlantic](problems/pacific_atlantic/README.md) | — | [py](problems/pacific_atlantic/solution.py) | — | — |
| [min cost connect points](problems/min_cost_connect_points/README.md) | — | [py](problems/min_cost_connect_points/solution.py) | — | — |
| [clone graph](problems/clone_graph/README.md) | — | [py](problems/clone_graph/solution.py) | — | — |
| [rotting oranges](problems/rotting_oranges/README.md) | [js](problems/rotting_oranges/solution.js) | [py](problems/rotting_oranges/solution.py) | [ts](problems/rotting_oranges/solution.ts) | [rs](problems/rotting_oranges/solution.rs) |

## Complexity

| Operation | Average | Worst |
|-----------|---------|-------|
| BFS / DFS | O(V + E) | O(V + E) |
| Dijkstra | O((V+E) log V) | O((V+E) log V) |
| Topological Sort | O(V + E) | O(V + E) |
| Union-Find (per op) | O(α(n)) | O(α(n)) |

A dash means the original handbook has no solution in that language. Each listed
solution has a test file, or Rust tests inside the solution. Do not treat coverage
as a claim that every language uses the same API.

[Study path](../learning/study_path.md) · [AI/ML path](../learning/ai_ml_path.md)
