# Find min cost connect sticks

Practice the matching question: [LeetCode #1167: Minimum Cost to Connect Sticks](https://leetcode.com/problems/minimum-cost-to-connect-sticks/).

Join sticks with the smallest total cost, paying the sum of the joined lengths at each step.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 14_greedy/problems/find_min_cost_connect_sticks js
npm run practice -- 14_greedy/problems/find_min_cost_connect_sticks py
npm run practice -- 14_greedy/problems/find_min_cost_connect_sticks ts
npm run practice -- 14_greedy/problems/find_min_cost_connect_sticks rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `findMinCostConnectSticks` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `find_min_cost_connect_sticks` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `findMinCostConnectSticks` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `find_min_cost_sticks` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(findMinCostConnectSticks([2,4,3]) === 14, "connectSticks");
```

[Back to the topic](../../README.md)
