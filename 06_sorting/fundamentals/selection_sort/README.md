# Selection sort

Sort a sequence by selecting the smallest remaining value.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 06_sorting/fundamentals/selection_sort py
# Edit the private solution path printed above.
npm run practice -- attempt 06_sorting/fundamentals/selection_sort py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `selection_sort` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
test_cases = [
    [64,34,25,12,22,11,90],
    [5,4,3,2,1],
    [1,2,3,4,5],
    [3],
    [],
    [1,1,1,1],
    [-3,1,-1,0,2],
]
expected = [sorted(t) for t in test_cases]
for sort_fn in [bubble_sort, selection_sort, insertion_sort, merge_sort, quick_sort, heap_sort]:
    for tc, exp in zip(test_cases, expected):
        assert sort_fn(tc) == exp, f"{sort_fn.__name__} failed on {tc}"
    print(f"  ✅ {sort_fn.__name__}")
```

## Solution notes

O(n²) — find minimum in unsorted portion, place at front.

[Back to the topic](../../README.md)
