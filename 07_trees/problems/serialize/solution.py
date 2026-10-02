from __future__ import annotations
from collections import deque
from typing import Optional
from fundamentals.bst.solution import TreeNode

def serialize(root: Optional[TreeNode]) -> str:
    """🔴 Serialize Binary Tree (LC #297)"""
    if not root: return "null"
    res, q = [], deque([root])
    while q:
        node = q.popleft()
        if node:
            res.append(str(node.val)); q.append(node.left); q.append(node.right)
        else:
            res.append("null")
    return ','.join(res)
