# Strstr

Practice the matching question: [LeetCode #28: Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/).

Find the first occurrence of a pattern in a string.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 03_strings/problems/strstr py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `strstr` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert strstr("hello","ll")==2 and strstr("aaaaa","bba")==-1
```

## Prerequisites

- [kmp search](../../fundamentals/kmp_search/README.md)

[Back to the topic](../../README.md)
