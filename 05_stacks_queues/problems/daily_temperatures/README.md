# Daily temperatures

Practice the matching question: [LeetCode #739: Daily Temperatures](https://leetcode.com/problems/daily-temperatures/).

Return the number of days until a warmer temperature for each day.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 05_stacks_queues/problems/daily_temperatures py
# Edit the private solution path printed above.
npm run practice -- attempt 05_stacks_queues/problems/daily_temperatures py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
