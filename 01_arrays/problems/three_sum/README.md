# Three sum

Practice the matching question: [LeetCode #15: 3Sum](https://leetcode.com/problems/3sum/).

Return each unique triplet whose values sum to zero.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 01_arrays/problems/three_sum js
npm run practice -- 01_arrays/problems/three_sum py
npm run practice -- 01_arrays/problems/three_sum ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `threeSum` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `three_sum` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `threeSum` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const ts = threeSum([-1, 0, 1, 2, -1, -4]).map(t => [...t].sort((a, b) => a - b)).sort();
assert(deepEqual(ts, [[-1, -1, 2], [-1, 0, 1]]), "three sum");
```

## Solution notes

3Sum (LC #15)
Find all unique triplets summing to zero.
Time: O(n²)  Space: O(1)

Pattern: Sort + two pointers. Skip duplicates to avoid repeat triplets.

[Back to the topic](../../README.md)
