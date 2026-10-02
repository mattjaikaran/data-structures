# Longest palindromic substring

Practice the matching question: [LeetCode #5: Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/).

Return a longest contiguous substring that reads the same in both directions.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/longest_palindromic_substring py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/longest_palindromic_substring py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `longestPalindromicSubstring` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `longest_palindromic_substring` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `longestPalindromicSubstring` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(["bab","aba"].includes(longestPalindromicSubstring("babad"))&&longestPalindromicSubstring("cbbd")==="bb","palindrome");
```

[Back to the topic](../../README.md)
