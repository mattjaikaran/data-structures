from __future__ import annotations
from collections import deque
from typing import Optional
from fundamentals.bst.solution import TreeNode

def right_side_view(root: Optional[TreeNode]) -> list[int]:
    """🟡 Binary Tree Right Side View (LC #199)"""
    result, q = [], deque([root]) if root else deque()
    while q:
        for _ in range(len(q)):
            node = q.popleft()
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
        result.append(node.val)  # type: ignore
    return result
