# Sort nearly sorted

Sort a sequence whose values are at most k positions from their sorted positions.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 06_sorting/problems/sort_nearly_sorted py
# Edit the private solution path printed above.
npm run practice -- attempt 06_sorting/problems/sort_nearly_sorted py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `sort_nearly_sorted` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert sort_nearly_sorted([2,1,4,3,6,5,8,7], 1) == [1,2,3,4,5,6,7,8]
```

## Solution notes

Sort a k-sorted array (each element at most k positions from sorted pos).
Use min-heap of size k+1. O(n log k).

[Back to the topic](../../README.md)
