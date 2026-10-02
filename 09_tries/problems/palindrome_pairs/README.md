# Palindrome pairs

Practice the matching question: [LeetCode #336: Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/).

Find word index pairs whose concatenation is a palindrome.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 09_tries/problems/palindrome_pairs py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `palindrome_pairs` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
pairs = palindrome_pairs(["abcd","dcba","lls","s","sssll"])
assert [0,1] in pairs and [1,0] in pairs
```

[Back to the topic](../../README.md)
