from __future__ import annotations
from typing import Optional
from fundamentals.bst.solution import TreeNode

def max_depth(root: Optional[TreeNode]) -> int:
    """🟢 Maximum Depth of Binary Tree (LC #104)"""
    if not root: return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))
