# Insert interval

Practice the matching question: [LeetCode #57: Insert Interval](https://leetcode.com/problems/insert-interval/).

Insert an interval into sorted disjoint intervals and merge overlaps.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 14_greedy/problems/insert_interval js
npm run practice -- 14_greedy/problems/insert_interval py
npm run practice -- 14_greedy/problems/insert_interval ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `insertInterval` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `insert_interval` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `insertInterval` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(eq(insertInterval([[1,3],[6,9]],[2,5]),[[1,5],[6,9]]), "insertInterval");
```

[Back to the topic](../../README.md)
