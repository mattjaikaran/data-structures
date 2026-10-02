# Longest consecutive

Practice the matching question: [LeetCode #128: Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/).

Return the length of the longest consecutive integer sequence, regardless of input order.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 02_hash_maps/problems/longest_consecutive js
npm run practice -- 02_hash_maps/problems/longest_consecutive py
npm run practice -- 02_hash_maps/problems/longest_consecutive ts
npm run practice -- 02_hash_maps/problems/longest_consecutive rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `longestConsecutive` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `longest_consecutive` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `longestConsecutive` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `longest_consecutive` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(longestConsecutive([100, 4, 200, 1, 3, 2]) === 4, "longCons");
```

## Solution notes

Longest Consecutive Sequence (LC #128) — O(n)

[Back to the topic](../../README.md)
