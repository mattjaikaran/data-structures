# Is valid parens

Practice the matching question: [LeetCode #20: Valid Parentheses](https://leetcode.com/problems/valid-parentheses/).

Check that each closing bracket matches the latest unmatched opening bracket.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 05_stacks_queues/problems/is_valid_parens py
# Edit the private solution path printed above.
npm run practice -- attempt 05_stacks_queues/problems/is_valid_parens py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `isValidParens` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `is_valid_parens` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `isValidParens` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `is_valid_parens` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(isValidParens("()[]{}"), "valid parens 1");
```

## Solution notes

Valid Parentheses (LC #20) — O(n) time, O(n) space.

[Back to the topic](../../README.md)
