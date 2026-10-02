# Num distinct

Practice the matching question: [LeetCode #115: Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/).

Count subsequences of the source that equal the target.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 03_strings/problems/num_distinct js
npm run practice -- 03_strings/problems/num_distinct py
npm run practice -- 03_strings/problems/num_distinct ts
npm run practice -- 03_strings/problems/num_distinct rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `numDistinct` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `num_distinct` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `numDistinct` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `num_distinct` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(numDistinct("rabbbit", "rabbit") === 3, "numDistinct");
```

[Back to the topic](../../README.md)
