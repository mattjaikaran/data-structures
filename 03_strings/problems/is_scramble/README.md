# Is scramble

Practice the matching question: [LeetCode #87: Scramble String](https://leetcode.com/problems/scramble-string/).

Determine whether recursive substring splits and swaps can transform one string into the other.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 03_strings/problems/is_scramble py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `is_scramble` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert is_scramble("great","rgeat") and not is_scramble("great","efta")
```

[Back to the topic](../../README.md)
