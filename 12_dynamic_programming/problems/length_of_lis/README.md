# Length of lis

Practice the matching question: [LeetCode #300: Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/).

Return the length of the longest strictly increasing subsequence.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/length_of_lis js
npm run practice -- 12_dynamic_programming/problems/length_of_lis py
npm run practice -- 12_dynamic_programming/problems/length_of_lis ts
npm run practice -- 12_dynamic_programming/problems/length_of_lis rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `lengthOfLIS` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `longest_increasing_subsequence` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `lengthOfLIS` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `length_of_lis` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(lengthOfLIS([10,9,2,5,3,7,101,18])===4,"lis");
```

## Solution notes

Longest Increasing Subsequence (LC #300)
O(n log n) using patience sorting / binary search.
tails[i] = smallest tail of all LIS of length i+1

[Back to the topic](../../README.md)
