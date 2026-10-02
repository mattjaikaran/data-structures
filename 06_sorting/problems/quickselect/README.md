# Quickselect

Select an order statistic without fully sorting the input. Check the solution signature for its k convention.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 06_sorting/problems/quickselect py
# Edit the private solution path printed above.
npm run practice -- attempt 06_sorting/problems/quickselect py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `quickselect` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `quickselect` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `quickselect` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `quickselect` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(quickselect([3, 2, 1, 5, 6, 4], 2) === 2, "quickselect");
```

## Solution notes

Find kth smallest element in O(n) avg via quickselect.
Same partition logic as quicksort but only recurse into relevant half.

[Back to the topic](../../README.md)
