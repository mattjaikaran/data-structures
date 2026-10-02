# Network delay

Practice the matching question: [LeetCode #743: Network Delay Time](https://leetcode.com/problems/network-delay-time/).

Return the time for a signal to reach every vertex, or -1 when a vertex is unreachable.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 10_graphs/problems/network_delay py
# Edit the private solution path printed above.
npm run practice -- attempt 10_graphs/problems/network_delay py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `networkDelay` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `network_delay` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `networkDelay` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `network_delay` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(networkDelay([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2) === 2, "networkDelay");
```

[Back to the topic](../../README.md)
