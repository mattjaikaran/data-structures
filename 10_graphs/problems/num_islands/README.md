# Num islands

Practice the matching question: [LeetCode #200: Number of Islands](https://leetcode.com/problems/number-of-islands/).

Count connected groups of land cells using horizontal and vertical neighbors.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 10_graphs/problems/num_islands js
npm run practice -- 10_graphs/problems/num_islands py
npm run practice -- 10_graphs/problems/num_islands ts
npm run practice -- 10_graphs/problems/num_islands rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `numIslands` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `num_islands` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `numIslands` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `num_islands` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(numIslands([["1", "1", "0"], ["0", "1", "0"], ["0", "0", "1"]]) === 2, "islands");
```

[Back to the topic](../../README.md)
