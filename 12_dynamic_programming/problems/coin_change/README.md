# Coin change

Practice the matching question: [LeetCode #322: Coin Change](https://leetcode.com/problems/coin-change/).

Return the smallest number of coins needed for an amount, or -1 when it is impossible.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/coin_change js
npm run practice -- 12_dynamic_programming/problems/coin_change py
npm run practice -- 12_dynamic_programming/problems/coin_change ts
npm run practice -- 12_dynamic_programming/problems/coin_change rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `coinChange` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `coin_change` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `coinChange` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `coin_change` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(coinChange([1,5,11],15)===3&&coinChange([2],3)===-1,"coinChange");
```

[Back to the topic](../../README.md)
