# Candy

Practice the matching question: [LeetCode #135: Candy](https://leetcode.com/problems/candy/).

Assign the smallest total number of candies so each child has one and higher-rated neighbors get more.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 14_greedy/problems/candy js
npm run practice -- 14_greedy/problems/candy py
npm run practice -- 14_greedy/problems/candy ts
npm run practice -- 14_greedy/problems/candy rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `candy` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `candy` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `candy` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `candy` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(candy([1,0,2]) === 5 && candy([1,2,2]) === 4, "candy");
```

[Back to the topic](../../README.md)
