# Remove invalid parentheses

Practice the matching question: [LeetCode #301: Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/).

Remove the smallest number of parentheses and return valid resulting strings.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 13_backtracking/problems/remove_invalid_parentheses py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `remove_invalid_parentheses` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
rip = remove_invalid_parentheses("()())()")
assert "(())()" in rip or "()(())" in rip or "()()()" in rip
```

[Back to the topic](../../README.md)
