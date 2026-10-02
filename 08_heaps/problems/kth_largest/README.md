# Kth largest

Practice the matching question: [LeetCode #215: Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/).

Return the kth largest input value.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 08_heaps/problems/kth_largest js
npm run practice -- 08_heaps/problems/kth_largest py
npm run practice -- 08_heaps/problems/kth_largest ts
npm run practice -- 08_heaps/problems/kth_largest rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `kthLargest` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `kth_largest` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `kthLargest` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `kth_largest` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(kthLargest([3, 2, 1, 5, 6, 4], 2) === 5, "kthLargest");
```

## Prerequisites

- [min heap](../../fundamentals/min_heap/README.md)

[Back to the topic](../../README.md)
