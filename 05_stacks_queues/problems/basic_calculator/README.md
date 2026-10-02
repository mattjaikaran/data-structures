# Basic calculator

Practice the matching question: [LeetCode #224: Basic Calculator](https://leetcode.com/problems/basic-calculator/).

Evaluate an expression with addition, subtraction, parentheses, and whitespace.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 05_stacks_queues/problems/basic_calculator py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `basic_calculator` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert basic_calculator("1 + 1") == 2
```

## Solution notes

Basic Calculator (LC #224) — stack for nested parens. O(n).

[Back to the topic](../../README.md)
