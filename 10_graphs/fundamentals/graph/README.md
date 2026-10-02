# Graph

Represent graph edges and traverse reachable vertices with the available search algorithms.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 10_graphs/fundamentals/graph js
npm run practice -- 10_graphs/fundamentals/graph py
npm run practice -- 10_graphs/fundamentals/graph ts
npm run practice -- 10_graphs/fundamentals/graph rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `Graph` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `Graph` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `Graph` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `Graph` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const g = new Graph();
[
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
  ].forEach(([u, v]) => g.addEdge(u, v));
assert(new Set(g.bfs(0)).size === 5, "bfs visits all");
```

[Back to the topic](../../README.md)
