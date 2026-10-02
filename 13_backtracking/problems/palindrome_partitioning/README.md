# Palindrome partitioning

Practice the matching question: [LeetCode #131: Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/).

Split a string into every sequence of palindromic substrings.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 13_backtracking/problems/palindrome_partitioning py
# Edit the private solution path printed above.
npm run practice -- attempt 13_backtracking/problems/palindrome_partitioning py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
