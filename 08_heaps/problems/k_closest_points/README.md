# K closest points

Practice the matching question: [LeetCode #973: K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/).

Return the k points with the smallest distance from the origin.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 08_heaps/problems/k_closest_points js
npm run practice -- 08_heaps/problems/k_closest_points py
npm run practice -- 08_heaps/problems/k_closest_points ts
npm run practice -- 08_heaps/problems/k_closest_points rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `kClosestPoints` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `k_closest_points` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `kClosestPoints` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `k_closest_points` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const pts = [
    [1, 3],
    [-2, 2],
    [3, 4],
    [-1, -1],
  ];
const cl = kClosestPoints(pts, 2);
assert(cl.length === 2, "kClosest len");
```

[Back to the topic](../../README.md)
