# Eval rpn

Practice the matching question: [LeetCode #150: Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/).

Evaluate a reverse Polish expression with a stack. Integer division truncates toward zero.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 05_stacks_queues/problems/eval_rpn js
npm run practice -- 05_stacks_queues/problems/eval_rpn py
npm run practice -- 05_stacks_queues/problems/eval_rpn ts
npm run practice -- 05_stacks_queues/problems/eval_rpn rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `evalRPN` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `eval_rpn` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `evalRPN` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `eval_rpn` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(evalRPN(["2", "1", "+", "3", "*"]) === 9, "rpn 1");
```

## Solution notes

Evaluate Reverse Polish Notation (LC #150) — O(n).

[Back to the topic](../../README.md)
