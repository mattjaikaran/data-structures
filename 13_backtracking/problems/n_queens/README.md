# N queens

Practice the matching question: [LeetCode #51: N-Queens](https://leetcode.com/problems/n-queens/).

Place n queens on an n-by-n board so no two share a row, column, or diagonal.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 13_backtracking/problems/n_queens js
npm run practice -- 13_backtracking/problems/n_queens py
npm run practice -- 13_backtracking/problems/n_queens ts
npm run practice -- 13_backtracking/problems/n_queens rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `nQueens` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `n_queens` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `nQueens` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `n_queens` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(nQueens(4).length === 2, "nQueens 4x4");
```

[Back to the topic](../../README.md)
