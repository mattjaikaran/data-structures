# Binary search

Return the position of a target in a sorted sequence. Return the language-specific missing result when the target is absent.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 01_arrays/fundamentals/binary_search py
# Edit the private solution path printed above.
npm run practice -- attempt 01_arrays/fundamentals/binary_search py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `binarySearch` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `binary_search` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `binarySearch` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `binary_search` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const sorted = [1, 3, 5, 7, 9, 11, 13];
assert(binarySearch(sorted, 7) === 3, "bs found");
```

## Solution notes

Binary Search on a sorted array.
Returns index of target, or -1 if not found.
Time: O(log n)  Space: O(1)

KEY INSIGHT: (left + right) // 2 can overflow in other languages —
use left + (right - left) // 2 as a habit.

[Back to the topic](../../README.md)
