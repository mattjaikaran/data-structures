# Find order

Practice the matching question: [LeetCode #210: Course Schedule II](https://leetcode.com/problems/course-schedule-ii/).

Return a valid prerequisite order, or an empty result for a cycle.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 10_graphs/problems/find_order py
# Edit the private solution path printed above.
npm run practice -- attempt 10_graphs/problems/find_order py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `findOrder` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `find_order` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `findOrder` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `find_order` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const order = findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]);
assert(order.length === 4, "findOrder");
```

[Back to the topic](../../README.md)
