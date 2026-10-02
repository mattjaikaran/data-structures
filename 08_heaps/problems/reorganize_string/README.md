# Reorganize string

Practice the matching question: [LeetCode #767: Reorganize String](https://leetcode.com/problems/reorganize-string/).

Rearrange characters so adjacent characters differ, or return the impossible result.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 08_heaps/problems/reorganize_string py
# Edit the private solution path printed above.
npm run practice -- attempt 08_heaps/problems/reorganize_string py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `reorganizeString` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `reorganize_string` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `reorganizeString` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const rs = reorganizeString("aab");
assert(rs.length === 3 && rs[0] !== rs[1] && rs[1] !== rs[2], "reorganize valid");
```

[Back to the topic](../../README.md)
