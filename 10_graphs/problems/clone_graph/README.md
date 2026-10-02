# Clone graph

Practice the matching question: [LeetCode #133: Clone Graph](https://leetcode.com/problems/clone-graph/).

Copy graph nodes and neighbor links. Preserve cycles and shared references without sharing original nodes.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 10_graphs/problems/clone_graph py
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| Python | [solution.py](solution.py) | `clone_graph` | [tests.py](tests.py) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```python
class Node:
    def __init__(self, val):
        self.val = val
        self.neighbors = []
node = Node(1)
other = Node(2)
node.neighbors = [other, node]
other.neighbors = [node]
copy = clone_graph(node)
assert copy is not node and copy.val == 1
assert copy.neighbors[1] is copy
assert copy.neighbors[0].neighbors[0] is copy
assert clone_graph(None) is None
```

[Back to the topic](../../README.md)
