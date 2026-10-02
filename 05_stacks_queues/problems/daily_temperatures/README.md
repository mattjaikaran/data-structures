# Daily temperatures

Practice the matching question: [LeetCode #739: Daily Temperatures](https://leetcode.com/problems/daily-temperatures/).

Return the number of days until a warmer temperature for each day.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 05_stacks_queues/problems/daily_temperatures js
npm run practice -- 05_stacks_queues/problems/daily_temperatures py
npm run practice -- 05_stacks_queues/problems/daily_temperatures ts
npm run practice -- 05_stacks_queues/problems/daily_temperatures rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `dailyTemperatures` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `daily_temperatures` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `dailyTemperatures` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `daily_temperatures` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(
    deepEq(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]),
    "daily temps"
  );
```

## Solution notes

Daily Temperatures (LC #739) — monotonic decreasing stack. O(n).

[Back to the topic](../../README.md)
