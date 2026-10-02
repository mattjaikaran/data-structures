# Total hamming distance

Practice the matching question: [LeetCode #477: Total Hamming Distance](https://leetcode.com/problems/total-hamming-distance/).

Sum Hamming distances across all unordered pairs of input values.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 11_bit_manipulation/problems/total_hamming_distance js
npm run practice -- 11_bit_manipulation/problems/total_hamming_distance py
npm run practice -- 11_bit_manipulation/problems/total_hamming_distance ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `totalHammingDistance` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `total_hamming_distance` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `totalHammingDistance` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(totalHammingDistance([4, 14, 2]) === 6, "totalHamming");
```

[Back to the topic](../../README.md)
