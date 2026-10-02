# Top k frequent

Practice the matching question: [LeetCode #347: Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/).

Return the k most frequent input values.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 08_heaps/problems/top_k_frequent js
npm run practice -- 08_heaps/problems/top_k_frequent py
npm run practice -- 08_heaps/problems/top_k_frequent ts
npm run practice -- 08_heaps/problems/top_k_frequent rs
```

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
