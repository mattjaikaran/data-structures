# Largest number

Practice the matching question: [LeetCode #179: Largest Number](https://leetcode.com/problems/largest-number/).

Arrange nonnegative integers to form the largest concatenated decimal number.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 14_greedy/problems/largest_number js
npm run practice -- 14_greedy/problems/largest_number py
npm run practice -- 14_greedy/problems/largest_number ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `largestNumber` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `largest_number` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `largestNumber` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(largestNumber([10,2]) === "210", "largestNumber");
```

[Back to the topic](../../README.md)
