# Trees

Start with fundamentals. Then choose one problem, edit its solution file, and run
its tests. Use JavaScript to understand the algorithm, then write Python without
looking at the reference solution. Add TypeScript and Rust after that.

Run all available exercises for this topic with:

```bash
npm run practice -- 07_trees py
```

## Fundamentals

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [bst](fundamentals/bst/README.md) | [js](fundamentals/bst/solution.js) | [py](fundamentals/bst/solution.py) | [ts](fundamentals/bst/solution.ts) | [rs](fundamentals/bst/solution.rs) |

## Problems

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [level order](problems/level_order/README.md) | [js](problems/level_order/solution.js) | [py](problems/level_order/solution.py) | [ts](problems/level_order/solution.ts) | [rs](problems/level_order/solution.rs) |
| [max depth](problems/max_depth/README.md) | [js](problems/max_depth/solution.js) | [py](problems/max_depth/solution.py) | [ts](problems/max_depth/solution.ts) | [rs](problems/max_depth/solution.rs) |
| [invert tree](problems/invert_tree/README.md) | [js](problems/invert_tree/solution.js) | [py](problems/invert_tree/solution.py) | [ts](problems/invert_tree/solution.ts) | — |
| [is symmetric](problems/is_symmetric/README.md) | [js](problems/is_symmetric/solution.js) | [py](problems/is_symmetric/solution.py) | [ts](problems/is_symmetric/solution.ts) | [rs](problems/is_symmetric/solution.rs) |
| [lowest common ancestor](problems/lowest_common_ancestor/README.md) | [js](problems/lowest_common_ancestor/solution.js) | [py](problems/lowest_common_ancestor/solution.py) | [ts](problems/lowest_common_ancestor/solution.ts) | — |
| [max path sum](problems/max_path_sum/README.md) | [js](problems/max_path_sum/solution.js) | [py](problems/max_path_sum/solution.py) | [ts](problems/max_path_sum/solution.ts) | [rs](problems/max_path_sum/solution.rs) |
| [right side view](problems/right_side_view/README.md) | [js](problems/right_side_view/solution.js) | [py](problems/right_side_view/solution.py) | [ts](problems/right_side_view/solution.ts) | [rs](problems/right_side_view/solution.rs) |
| [kth smallest](problems/kth_smallest/README.md) | [js](problems/kth_smallest/solution.js) | [py](problems/kth_smallest/solution.py) | [ts](problems/kth_smallest/solution.ts) | — |
| [is valid bst](problems/is_valid_bst/README.md) | [js](problems/is_valid_bst/solution.js) | — | [ts](problems/is_valid_bst/solution.ts) | [rs](problems/is_valid_bst/solution.rs) |
| [build tree from pre in](problems/build_tree_from_pre_in/README.md) | [js](problems/build_tree_from_pre_in/solution.js) | [py](problems/build_tree_from_pre_in/solution.py) | [ts](problems/build_tree_from_pre_in/solution.ts) | — |
| [diameter of binary tree](problems/diameter_of_binary_tree/README.md) | [js](problems/diameter_of_binary_tree/solution.js) | [py](problems/diameter_of_binary_tree/solution.py) | [ts](problems/diameter_of_binary_tree/solution.ts) | [rs](problems/diameter_of_binary_tree/solution.rs) |
| [is balanced](problems/is_balanced/README.md) | [js](problems/is_balanced/solution.js) | [py](problems/is_balanced/solution.py) | [ts](problems/is_balanced/solution.ts) | [rs](problems/is_balanced/solution.rs) |
| [zigzag level order](problems/zigzag_level_order/README.md) | [js](problems/zigzag_level_order/solution.js) | — | [ts](problems/zigzag_level_order/solution.ts) | — |
| [serialize](problems/serialize/README.md) | — | [py](problems/serialize/solution.py) | — | — |
| [deserialize](problems/deserialize/README.md) | — | [py](problems/deserialize/solution.py) | — | — |
| [path sum](problems/path_sum/README.md) | — | [py](problems/path_sum/solution.py) | — | — |

## Complexity

| Operation     | BST (avg) | BST (worst) | Balanced |
|---------------|-----------|-------------|----------|
| Search        | O(log n)  | O(n)        | O(log n) |
| Insert        | O(log n)  | O(n)        | O(log n) |
| Delete        | O(log n)  | O(n)        | O(log n) |
| Traversal     | O(n)      | O(n)        | O(n)     |

A dash means the original handbook has no solution in that language. Each listed
solution has a test file, or Rust tests inside the solution. Do not treat coverage
as a claim that every language uses the same API.

[Study path](../learning/study_path.md) · [AI/ML path](../learning/ai_ml_path.md)
