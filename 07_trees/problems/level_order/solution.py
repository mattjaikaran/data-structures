from __future__ import annotations
from collections import deque
from typing import Optional
from fundamentals.bst.solution import TreeNode

def level_order(root: Optional[TreeNode]) -> list[list[int]]:
    """🟡 Binary Tree Level Order Traversal (LC #102)"""
    if not root: return []
    result, q = [], deque([root])
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
        result.append(level)
    return result
