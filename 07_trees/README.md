# Trees

Binary trees with BST property: left.val < node.val < right.val. Traversals: Inorder (→ sorted), Preorder, Postorder, Level-order (BFS). AVL trees self-balance for guaranteed O(log n). Use trees for hierarchical data, range queries, and ordered operations.

## Complexity

| Operation     | BST (avg) | BST (worst) | Balanced |
|---------------|-----------|-------------|----------|
| Search        | O(log n)  | O(n)        | O(log n) |
| Insert        | O(log n)  | O(n)        | O(log n) |
| Delete        | O(log n)  | O(n)        | O(log n) |
| Traversal     | O(n)      | O(n)        | O(n)     |

## Key Patterns

- **DFS (recursive)** — max depth, invert, symmetric check
- **BFS (level-order)** — level traversal, right-side view
- **Inorder** — sorted order in BST, kth smallest
- **Path/Subtree** — diameter, max path sum, path sum II

## Problems Implemented

| Problem                    | Difficulty | LeetCode |
|----------------------------|------------|----------|
| Maximum Depth              | Easy       | #104     |
| Invert Binary Tree         | Easy       | #226     |
| Symmetric Tree             | Easy       | #101     |
| Diameter of Binary Tree    | Easy       | #543     |
| Level Order Traversal       | Medium     | #102     |
| Right Side View            | Medium     | #199     |
| Lowest Common Ancestor     | Medium     | #236     |
| Build from Preorder+Inorder| Medium     | #105     |
| Kth Smallest in BST        | Medium     | #230     |
| Balanced Binary Tree       | Medium     | #110     |
| Path Sum II                | Medium     | #113     |
| Maximum Path Sum           | Hard       | #124     |
| Serialize/Deserialize      | Hard       | #297     |

## Implementations

| Language   | File |
|------------|------|
| Python     | [trees.py](trees.py) |
| JavaScript | [trees.js](trees.js) |
| TypeScript | [trees.ts](trees.ts) |
| Rust       | [trees.rs](trees.rs) |
