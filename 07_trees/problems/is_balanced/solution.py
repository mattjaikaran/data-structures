from __future__ import annotations
from typing import Optional
from fundamentals.bst.solution import TreeNode

def is_balanced(root: Optional[TreeNode]) -> bool:
    """🟡 Balanced Binary Tree (LC #110)"""
    def check(n):
        if not n: return 0
        l, r = check(n.left), check(n.right)
        if l == -1 or r == -1 or abs(l - r) > 1: return -1
        return 1 + max(l, r)
    return check(root) != -1
