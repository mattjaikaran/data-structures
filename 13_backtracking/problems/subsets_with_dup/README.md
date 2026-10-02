# Subsets with dup

Practice the matching question: [LeetCode #90: Subsets II](https://leetcode.com/problems/subsets-ii/).

Generate unique subsets when the input contains duplicate values.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 13_backtracking/problems/subsets_with_dup js
npm run practice -- 13_backtracking/problems/subsets_with_dup py
npm run practice -- 13_backtracking/problems/subsets_with_dup ts
npm run practice -- 13_backtracking/problems/subsets_with_dup rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `subsetsWithDup` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `subsets_with_dup` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `subsetsWithDup` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `subsets_with_dup` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(subsetsWithDup([1,2,2]).length === 6, "subsetsWithDup");
```

[Back to the topic](../../README.md)
