# Palindrome partitioning

Practice the matching question: [LeetCode #131: Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/).

Split a string into every sequence of palindromic substrings.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 13_backtracking/problems/palindrome_partitioning js
npm run practice -- 13_backtracking/problems/palindrome_partitioning py
npm run practice -- 13_backtracking/problems/palindrome_partitioning ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `palindromePartitioning` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `palindrome_partitioning` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `palindromePartitioning` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const pp = palindromePartitioning("aab");
assert(pp.some(p => eq(p,["a","a","b"])) && pp.some(p => eq(p,["aa","b"])), "palindromePartitioning");
```

[Back to the topic](../../README.md)
