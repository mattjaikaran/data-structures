# Longest common subsequence

Practice the matching question: [LeetCode #1143: Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/).

Return the length of the longest subsequence shared by both strings.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/longest_common_subsequence py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/longest_common_subsequence py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
