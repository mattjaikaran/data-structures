# Coin change ways

Practice the matching question: [LeetCode #518: Coin Change II](https://leetcode.com/problems/coin-change-ii/).

Count combinations of coins that make the amount. Do not count different orders separately.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/coin_change_ways js
npm run practice -- 12_dynamic_programming/problems/coin_change_ways py
npm run practice -- 12_dynamic_programming/problems/coin_change_ways ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `coinChangeWays` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `coin_change_ways` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `coinChangeWays` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(coinChangeWays([1,2,5],5)===4,"coinWays");
```

[Back to the topic](../../README.md)
