# Palindrome pairs

Practice the matching question: [LeetCode #336: Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/).

Find word index pairs whose concatenation is a palindrome.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 09_tries/problems/palindrome_pairs py
# Edit the private solution path printed above.
npm run practice -- attempt 09_tries/problems/palindrome_pairs py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `palindrome_pairs` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
pairs = palindrome_pairs(["abcd","dcba","lls","s","sssll"])
assert [0,1] in pairs and [1,0] in pairs
```

[Back to the topic](../../README.md)
