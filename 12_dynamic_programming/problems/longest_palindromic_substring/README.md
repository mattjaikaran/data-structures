# Longest palindromic substring

Practice the matching question: [LeetCode #5: Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/).

Return a longest contiguous substring that reads the same in both directions.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/longest_palindromic_substring js
npm run practice -- 12_dynamic_programming/problems/longest_palindromic_substring py
npm run practice -- 12_dynamic_programming/problems/longest_palindromic_substring ts
```

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
