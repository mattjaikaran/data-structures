# Eval rpn

Practice the matching question: [LeetCode #150: Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/).

Evaluate a reverse Polish expression with a stack. Integer division truncates toward zero.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 05_stacks_queues/problems/eval_rpn py
# Edit the private solution path printed above.
npm run practice -- attempt 05_stacks_queues/problems/eval_rpn py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
