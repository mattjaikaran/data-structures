# Union find

Join disjoint sets and determine whether vertices have the same representative.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 10_graphs/fundamentals/union_find py
# Edit the private solution path printed above.
npm run practice -- attempt 10_graphs/fundamentals/union_find py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `UnionFind` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `UnionFind` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `UnionFind` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `UnionFind` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const uf = new UnionFind(5);
uf.union(0, 1);
uf.union(2, 3);
assert(uf.connected(0, 1) && !uf.connected(0, 2), "uf union/find");
```

## Solution notes

Path compression + union by rank → O(α) per operation.

[Back to the topic](../../README.md)
