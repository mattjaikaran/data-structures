# Target sum

Practice the matching question: [LeetCode #494: Target Sum](https://leetcode.com/problems/target-sum/).

Count assignments of plus and minus signs that produce the target sum.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/target_sum js
npm run practice -- 12_dynamic_programming/problems/target_sum py
npm run practice -- 12_dynamic_programming/problems/target_sum ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `targetSum` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `target_sum` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `targetSum` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(targetSum([1,1,1,1,1],3)===5,"targetSum");
```

[Back to the topic](../../README.md)
