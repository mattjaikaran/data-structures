# Edit distance

Practice the matching question: [LeetCode #72: Edit Distance](https://leetcode.com/problems/edit-distance/).

Return the smallest number of insertions, deletions, and substitutions needed to transform one string into another.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/edit_distance js
npm run practice -- 12_dynamic_programming/problems/edit_distance py
npm run practice -- 12_dynamic_programming/problems/edit_distance ts
npm run practice -- 12_dynamic_programming/problems/edit_distance rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `editDistance` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `edit_distance` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `editDistance` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `edit_distance` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(editDistance("horse","ros")===3&&editDistance("intention","execution")===5,"editDist");
```

[Back to the topic](../../README.md)
