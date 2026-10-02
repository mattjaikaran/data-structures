# Is valid parens

Practice the matching question: [LeetCode #20: Valid Parentheses](https://leetcode.com/problems/valid-parentheses/).

Check that each closing bracket matches the latest unmatched opening bracket.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 05_stacks_queues/problems/is_valid_parens js
npm run practice -- 05_stacks_queues/problems/is_valid_parens py
npm run practice -- 05_stacks_queues/problems/is_valid_parens ts
npm run practice -- 05_stacks_queues/problems/is_valid_parens rs
```

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
