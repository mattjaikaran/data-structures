# Best time with fee

Practice the matching question: [LeetCode #714: Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/).

Maximize stock profit across trades with a fee charged per completed trade.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/best_time_with_fee js
npm run practice -- 12_dynamic_programming/problems/best_time_with_fee py
npm run practice -- 12_dynamic_programming/problems/best_time_with_fee ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `bestTimeWithFee` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `best_time_with_fee` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `bestTimeWithFee` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(bestTimeWithFee([1,3,2,8,4,9],2)===8,"fee");
```

[Back to the topic](../../README.md)
