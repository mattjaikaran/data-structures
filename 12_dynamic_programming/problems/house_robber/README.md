# House robber

Practice the matching question: [LeetCode #198: House Robber](https://leetcode.com/problems/house-robber/).

Return the largest sum you can take without choosing adjacent houses.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/house_robber js
npm run practice -- 12_dynamic_programming/problems/house_robber py
npm run practice -- 12_dynamic_programming/problems/house_robber ts
npm run practice -- 12_dynamic_programming/problems/house_robber rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `houseRobber` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `house_robber` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `houseRobber` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `house_robber` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(houseRobber([2,7,9,3,1])===12&&houseRobber([1,2,3,1])===4,"robber");
```

[Back to the topic](../../README.md)
