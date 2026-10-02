from __future__ import annotations
from typing import Optional
from fundamentals.bst.solution import TreeNode

def diameter(root: Optional[TreeNode]) -> int:
    """🟢 Diameter of Binary Tree (LC #543)"""
    best = [0]
    def height(n):
        if not n: return 0
        l, r = height(n.left), height(n.right)
        best[0] = max(best[0], l + r)
        return 1 + max(l, r)
    height(root); return best[0]
