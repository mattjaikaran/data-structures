# Top k frequent

Practice the matching question: [LeetCode #347: Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/).

Return the k most frequent input values.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 08_heaps/problems/top_k_frequent py
# Edit the private solution path printed above.
npm run practice -- attempt 08_heaps/problems/top_k_frequent py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `topKFrequent` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `top_k_frequent` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `topKFrequent` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `top_k_frequent` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const tf1 = topKFrequent([1, 1, 1, 2, 2, 3], 2);
assert(new Set(tf1).has(1) && new Set(tf1).has(2), "topKFrequent");
```

[Back to the topic](../../README.md)
