# Generate parentheses

Practice the matching question: [LeetCode #22: Generate Parentheses](https://leetcode.com/problems/generate-parentheses/).

Generate balanced parentheses strings with n pairs.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 05_stacks_queues/problems/generate_parentheses py
# Edit the private solution path printed above.
npm run practice -- attempt 05_stacks_queues/problems/generate_parentheses py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `generateParentheses` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `generate_parentheses` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `generateParentheses` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(deepEq(generateParentheses(1), ["()"]), "gen parens n=1");
```

[Back to the topic](../../README.md)
