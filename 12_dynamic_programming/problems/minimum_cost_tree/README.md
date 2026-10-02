# Minimum cost tree

Practice the matching question: [LeetCode #1130: Minimum Cost Tree From Leaf Values](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/).

Build a tree with the requested leaf order and minimize the sum of products at its internal nodes.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/minimum_cost_tree py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/minimum_cost_tree py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `minimum_cost_tree` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
assert minimum_cost_tree([6, 2, 4]) == 32
assert minimum_cost_tree([4, 11]) == 44
```

## Solution notes

Minimum Cost Tree From Leaf Values (LC #1130)
Monotonic stack approach: O(n)

[Back to the topic](../../README.md)
