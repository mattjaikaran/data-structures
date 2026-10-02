# Trap rain water

Practice the matching question: [LeetCode #42: Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/).

Return the water held between bars after rain. Each bar has width one.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 01_arrays/problems/trap_rain_water py
# Edit the private solution path printed above.
npm run practice -- attempt 01_arrays/problems/trap_rain_water py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `trapRainWater` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `trap_rain_water` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `trapRainWater` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `trap_rain_water` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) === 6, "trap classic");
```

## Solution notes

Trapping Rain Water (LC #42)
Time: O(n)  Space: O(1)

At each position, water = min(max_left, max_right) - height[i].
Two pointer approach: process the shorter side — we know its
water contribution is bounded by its own max.

[Back to the topic](../../README.md)
