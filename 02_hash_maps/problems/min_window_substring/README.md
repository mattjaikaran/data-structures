# Min window substring

Practice the matching question: [LeetCode #76: Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/).

Return the shortest substring that includes every required character and its required count.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 02_hash_maps/problems/min_window_substring js
npm run practice -- 02_hash_maps/problems/min_window_substring py
npm run practice -- 02_hash_maps/problems/min_window_substring ts
npm run practice -- 02_hash_maps/problems/min_window_substring rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `minWindowSubstring` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `min_window_substring` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `minWindowSubstring` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `min_window_substring` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(minWindowSubstring("ADOBECODEBANC", "ABC") === "BANC", "minWindow");
```

[Back to the topic](../../README.md)
