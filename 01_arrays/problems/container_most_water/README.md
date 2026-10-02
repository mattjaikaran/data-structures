# Container most water

Practice the matching question: [LeetCode #11: Container With Most Water](https://leetcode.com/problems/container-with-most-water/).

Choose two bars that enclose the largest area. Use the smaller height multiplied by the distance between the bars.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 01_arrays/problems/container_most_water py
# Edit the private solution path printed above.
npm run practice -- attempt 01_arrays/problems/container_most_water py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `containerMostWater` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `container_most_water` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `containerMostWater` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `container_most_water` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(containerMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]) === 49, "container water");
```

## Solution notes

Container With Most Water (LC #11)
Time: O(n)  Space: O(1)

Pattern: Two pointers. Move the SHORTER side inward — moving
the taller side can only decrease the width without any guarantee
of increasing height.

[Back to the topic](../../README.md)
