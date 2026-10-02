from __future__ import annotations
from typing import Optional
from fundamentals.bst.solution import TreeNode

def max_path_sum(root: Optional[TreeNode]) -> int:
    """🔴 Binary Tree Maximum Path Sum (LC #124)"""
    best = [float('-inf')]
    def gain(n):
        if not n: return 0
        l, r = max(gain(n.left), 0), max(gain(n.right), 0)
        best[0] = max(best[0], l + r + n.val)
        return n.val + max(l, r)
    gain(root); return int(best[0])
