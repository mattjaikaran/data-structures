# Trap rain water

Practice the matching question: [LeetCode #42: Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/).

Return the water held between bars after rain. Each bar has width one.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 01_arrays/problems/trap_rain_water js
npm run practice -- 01_arrays/problems/trap_rain_water py
npm run practice -- 01_arrays/problems/trap_rain_water ts
npm run practice -- 01_arrays/problems/trap_rain_water rs
```

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
