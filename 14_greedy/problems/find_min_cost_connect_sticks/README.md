# Find min cost connect sticks

Practice the matching question: [LeetCode #1167: Minimum Cost to Connect Sticks](https://leetcode.com/problems/minimum-cost-to-connect-sticks/).

Join sticks with the smallest total cost, paying the sum of the joined lengths at each step.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 14_greedy/problems/find_min_cost_connect_sticks py
# Edit the private solution path printed above.
npm run practice -- attempt 14_greedy/problems/find_min_cost_connect_sticks py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
