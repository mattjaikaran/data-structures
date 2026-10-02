# Generate parentheses

Practice the matching question: [LeetCode #22: Generate Parentheses](https://leetcode.com/problems/generate-parentheses/).

Generate balanced parentheses strings with n pairs.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 05_stacks_queues/problems/generate_parentheses js
npm run practice -- 05_stacks_queues/problems/generate_parentheses py
npm run practice -- 05_stacks_queues/problems/generate_parentheses ts
```

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
