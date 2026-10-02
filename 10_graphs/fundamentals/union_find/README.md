# Union find

Join disjoint sets and determine whether vertices have the same representative.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 10_graphs/fundamentals/union_find js
npm run practice -- 10_graphs/fundamentals/union_find py
npm run practice -- 10_graphs/fundamentals/union_find ts
npm run practice -- 10_graphs/fundamentals/union_find rs
```

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
