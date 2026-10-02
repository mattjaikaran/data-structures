# Min path sum

Practice the matching question: [LeetCode #64: Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/).

Find the smallest sum on a grid path that moves only right or down.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/min_path_sum js
npm run practice -- 12_dynamic_programming/problems/min_path_sum py
npm run practice -- 12_dynamic_programming/problems/min_path_sum ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `minPathSum` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `min_path_sum` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `minPathSum` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(minPathSum([[1,3,1],[1,5,1],[4,2,1]])===7,"minPath");
```

[Back to the topic](../../README.md)
