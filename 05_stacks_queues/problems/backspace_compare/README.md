# Backspace compare

Practice the matching question: [LeetCode #844: Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/).

Compare two strings after applying # as a backspace.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 05_stacks_queues/problems/backspace_compare js
npm run practice -- 05_stacks_queues/problems/backspace_compare py
npm run practice -- 05_stacks_queues/problems/backspace_compare ts
npm run practice -- 05_stacks_queues/problems/backspace_compare rs
```

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
