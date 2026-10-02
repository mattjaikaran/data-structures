# Count and say

Practice the matching question: [LeetCode #38: Count and Say](https://leetcode.com/problems/count-and-say/).

Generate the nth term by describing consecutive runs in the previous term, starting with "1".

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 03_strings/problems/count_and_say py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `count_and_say` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert count_and_say(1) == "1"
assert count_and_say(5) == "111221"
```

[Back to the topic](../../README.md)
