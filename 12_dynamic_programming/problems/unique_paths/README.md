# Unique paths

Practice the matching question: [LeetCode #62: Unique Paths](https://leetcode.com/problems/unique-paths/).

Count paths through a rectangular grid when you can move only right or down.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/unique_paths js
npm run practice -- 12_dynamic_programming/problems/unique_paths py
npm run practice -- 12_dynamic_programming/problems/unique_paths ts
npm run practice -- 12_dynamic_programming/problems/unique_paths rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `uniquePaths` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `unique_paths` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `uniquePaths` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `unique_paths` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(uniquePaths(3,7)===28&&uniquePaths(3,2)===3,"uniquePaths");
```

[Back to the topic](../../README.md)
