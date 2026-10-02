# Longest common subsequence

Practice the matching question: [LeetCode #1143: Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/).

Return the length of the longest subsequence shared by both strings.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/longest_common_subsequence js
npm run practice -- 12_dynamic_programming/problems/longest_common_subsequence py
npm run practice -- 12_dynamic_programming/problems/longest_common_subsequence ts
npm run practice -- 12_dynamic_programming/problems/longest_common_subsequence rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `longestCommonSubsequence` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `longest_common_subsequence` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `longestCommonSubsequence` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `longest_common_subsequence` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(longestCommonSubsequence("abcde","ace")===3&&longestCommonSubsequence("abc","def")===0,"lcs");
```

[Back to the topic](../../README.md)
