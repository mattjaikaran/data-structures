# Zigzag conversion

Practice the matching question: [LeetCode #6: Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/).

Read characters row by row after arranging them in a zigzag with the specified row count.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 03_strings/problems/zigzag_conversion py
# Edit the private solution path printed above.
npm run practice -- attempt 03_strings/problems/zigzag_conversion py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `zigzagConversion` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `zigzag_conversion` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `zigzagConversion` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(zigzagConversion("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR", "zigzag 3");
```

[Back to the topic](../../README.md)
