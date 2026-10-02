# Remove invalid parentheses

Practice the matching question: [LeetCode #301: Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/).

Remove the smallest number of parentheses and return valid resulting strings.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 13_backtracking/problems/remove_invalid_parentheses py
# Edit the private solution path printed above.
npm run practice -- attempt 13_backtracking/problems/remove_invalid_parentheses py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `remove_invalid_parentheses` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
rip = remove_invalid_parentheses("()())()")
assert "(())()" in rip or "()(())" in rip or "()()()" in rip
```

[Back to the topic](../../README.md)
