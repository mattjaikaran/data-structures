# Four sum count

Practice the matching question: [LeetCode #454: 4Sum II](https://leetcode.com/problems/4sum-ii/).

Count choices of one value from each of four arrays whose sum is zero.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 02_hash_maps/problems/four_sum_count py
# Edit the private solution path printed above.
npm run practice -- attempt 02_hash_maps/problems/four_sum_count py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `four_sum_count` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert four_sum_count([1,2],[-2,-1],[-1,2],[0,2])==2
```

[Back to the topic](../../README.md)
