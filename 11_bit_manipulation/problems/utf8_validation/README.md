# Utf8 validation

Practice the matching question: [LeetCode #393: UTF-8 Validation](https://leetcode.com/problems/utf-8-validation/).

Check whether integer bytes form valid UTF-8 byte sequences.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 11_bit_manipulation/problems/utf8_validation py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `utf8_validation` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert utf8_validation([197, 130, 1])
```

[Back to the topic](../../README.md)
