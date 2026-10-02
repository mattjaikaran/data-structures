# Best time buy sell

Practice the matching question: [LeetCode #121: Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/).

Return the largest profit from buying once and selling on a later day. Return zero if no profitable trade exists.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 01_arrays/problems/best_time_buy_sell js
npm run practice -- 01_arrays/problems/best_time_buy_sell py
npm run practice -- 01_arrays/problems/best_time_buy_sell ts
npm run practice -- 01_arrays/problems/best_time_buy_sell rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `bestTimeBuySell` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `best_time_buy_sell` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `bestTimeBuySell` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `best_time_buy_sell` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(bestTimeBuySell([7, 1, 5, 3, 6, 4]) === 5, "buy sell profit");
```

## Solution notes

Best Time to Buy and Sell Stock (LC #121)
One transaction max. Return max profit.
Time: O(n)  Space: O(1)
Pattern: Track running minimum, compute max profit at each step.

[Back to the topic](../../README.md)
