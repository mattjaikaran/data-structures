# Combination sum

Practice the matching question: [LeetCode #39: Combination Sum](https://leetcode.com/problems/combination-sum/).

Return combinations that sum to the target. You can reuse candidate values.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 13_backtracking/problems/combination_sum js
npm run practice -- 13_backtracking/problems/combination_sum py
npm run practice -- 13_backtracking/problems/combination_sum ts
npm run practice -- 13_backtracking/problems/combination_sum rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `combinationSum` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `combination_sum` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `combinationSum` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `combination_sum` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const cs = combinationSum([2,3,6,7], 7);
assert(cs.length === 2 && cs.some(c => eq(c,[7])), "combinationSum");
```

[Back to the topic](../../README.md)
