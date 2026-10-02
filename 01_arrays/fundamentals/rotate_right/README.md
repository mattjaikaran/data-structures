# Rotate right

Rotate a sequence to the right by k positions. Preserve the order within each rotated part.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 01_arrays/fundamentals/rotate_right py
# Edit the private solution path printed above.
npm run practice -- attempt 01_arrays/fundamentals/rotate_right py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `rotateRight` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `rotate_right` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `rotateRight` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `rotate_right` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const rot = [1, 2, 3, 4, 5];
rotateRight(rot, 2);
assert(deepEqual(rot, [4, 5, 1, 2, 3]), "rotate right");
```

## Solution notes

Rotate array right by k steps IN-PLACE.
Time: O(n)  Space: O(1)

REVERSAL TRICK:
  [1,2,3,4,5], k=2 → [4,5,1,2,3]
  Step 1: reverse all    → [5,4,3,2,1]
  Step 2: reverse [0:k]  → [4,5,3,2,1]
  Step 3: reverse [k:]   → [4,5,1,2,3]  ✓

[Back to the topic](../../README.md)
