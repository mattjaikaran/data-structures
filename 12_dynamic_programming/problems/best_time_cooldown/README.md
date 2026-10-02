# Best time cooldown

Practice the matching question: [LeetCode #309: Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/).

Maximize stock profit across trades with one cooldown day after each sale.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/best_time_cooldown js
npm run practice -- 12_dynamic_programming/problems/best_time_cooldown py
npm run practice -- 12_dynamic_programming/problems/best_time_cooldown ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `bestTimeCooldown` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `best_time_with_cooldown` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `bestTimeCooldown` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(bestTimeCooldown([1,2,3,0,2])===3,"cooldown");
```

[Back to the topic](../../README.md)
