# Search rotated

Practice the matching question: [LeetCode #33: Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/).

Find a target in a rotated, sorted sequence of distinct values.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 01_arrays/problems/search_rotated js
npm run practice -- 01_arrays/problems/search_rotated py
npm run practice -- 01_arrays/problems/search_rotated ts
npm run practice -- 01_arrays/problems/search_rotated rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `searchRotated` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `search_rotated` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `searchRotated` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `search_rotated` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(searchRotated([4, 5, 6, 7, 0, 1, 2], 0) === 4, "search rotated found");
```

## Solution notes

Search in Rotated Sorted Array (LC #33)
Time: O(log n)  Space: O(1)

KEY INSIGHT: One half is ALWAYS sorted. Check which half,
then determine if target is within that sorted range.

[Back to the topic](../../README.md)
