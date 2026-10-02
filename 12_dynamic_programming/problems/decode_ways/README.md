# Decode ways

Practice the matching question: [LeetCode #91: Decode Ways](https://leetcode.com/problems/decode-ways/).

Count decodings where 1 through 26 represent letters. A zero cannot decode alone.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/decode_ways py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/decode_ways py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `decodeWays` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `decode_ways` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `decodeWays` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(decodeWays("12")===2&&decodeWays("226")===3&&decodeWays("06")===0,"decode");
```

[Back to the topic](../../README.md)
