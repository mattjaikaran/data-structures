# Find order

Practice the matching question: [LeetCode #210: Course Schedule II](https://leetcode.com/problems/course-schedule-ii/).

Return a valid prerequisite order, or an empty result for a cycle.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 10_graphs/problems/find_order js
npm run practice -- 10_graphs/problems/find_order py
npm run practice -- 10_graphs/problems/find_order ts
npm run practice -- 10_graphs/problems/find_order rs
```

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
