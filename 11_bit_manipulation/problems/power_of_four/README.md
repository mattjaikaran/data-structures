# Power of four

Practice the matching question: [LeetCode #342: Power of Four](https://leetcode.com/problems/power-of-four/).

Determine whether a positive integer is a power of four.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 11_bit_manipulation/problems/power_of_four js
npm run practice -- 11_bit_manipulation/problems/power_of_four py
npm run practice -- 11_bit_manipulation/problems/power_of_four ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `powerOfFour` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `power_of_four` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `powerOfFour` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(powerOfFour(16) && !powerOfFour(8), "pow4");
```

[Back to the topic](../../README.md)
