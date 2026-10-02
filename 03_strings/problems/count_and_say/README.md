# Count and say

Practice the matching question: [LeetCode #38: Count and Say](https://leetcode.com/problems/count-and-say/).

Generate the nth term by describing consecutive runs in the previous term, starting with "1".

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 03_strings/problems/count_and_say py
# Edit the private solution path printed above.
npm run practice -- attempt 03_strings/problems/count_and_say py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `count_and_say` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert count_and_say(1) == "1"
assert count_and_say(5) == "111221"
```

[Back to the topic](../../README.md)
