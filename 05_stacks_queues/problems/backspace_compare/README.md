# Backspace compare

Practice the matching question: [LeetCode #844: Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/).

Compare two strings after applying # as a backspace.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 05_stacks_queues/problems/backspace_compare py
# Edit the private solution path printed above.
npm run practice -- attempt 05_stacks_queues/problems/backspace_compare py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `backspaceCompare` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `backspace_compare` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `backspaceCompare` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `backspace_compare` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(backspaceCompare("ab#c", "ad#c"), "backspace 1");
```

## Solution notes

Backspace String Compare (LC #844). '#' = backspace. O(n).

[Back to the topic](../../README.md)
