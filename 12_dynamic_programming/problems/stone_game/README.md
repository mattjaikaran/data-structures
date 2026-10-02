# Stone game

Practice the matching question: [LeetCode #877: Stone Game](https://leetcode.com/problems/stone-game/).

Determine whether the first player wins by choosing piles from either end.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/stone_game py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `stone_game` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert stone_game([5, 3, 4, 5]) is True
assert stone_game([3, 7, 2, 3]) is True
```

[Back to the topic](../../README.md)
