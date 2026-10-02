# Graph

Represent graph edges and traverse reachable vertices with the available search algorithms.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 10_graphs/fundamentals/graph py
# Edit the private solution path printed above.
npm run practice -- attempt 10_graphs/fundamentals/graph py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
