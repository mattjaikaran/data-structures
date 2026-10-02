# String compression

Practice the matching question: [LeetCode #443: String Compression](https://leetcode.com/problems/string-compression/).

Compress consecutive repeated characters in place and return the resulting length.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 03_strings/problems/string_compression py
# Edit the private solution path printed above.
npm run practice -- attempt 03_strings/problems/string_compression py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `stringCompression` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `string_compression` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `stringCompression` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const chars = ["a", "a", "b", "b", "c", "c", "c"];
assert(stringCompression(chars) === 6, "compression");
```

[Back to the topic](../../README.md)
