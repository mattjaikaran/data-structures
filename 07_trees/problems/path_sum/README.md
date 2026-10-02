# Path sum

Practice the matching question: [LeetCode #113: Path Sum II](https://leetcode.com/problems/path-sum-ii/).

Determine whether a root-to-leaf path has the requested sum.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 07_trees/problems/path_sum py
# Edit the private solution path printed above.
npm run practice -- attempt 07_trees/problems/path_sum py
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `path_sum` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
ps_root = TreeNode.from_list([5,4,8,11,None,13,4,7,2,None,None,5,1])
paths = path_sum(ps_root, 22)
assert sorted(map(sorted, paths)) == sorted(map(sorted, [[5,4,11,2],[5,8,4,5]]))
```

## Prerequisites

- [bst](../../fundamentals/bst/README.md)

[Back to the topic](../../README.md)
