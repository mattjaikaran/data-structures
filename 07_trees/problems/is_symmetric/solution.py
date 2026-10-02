from __future__ import annotations
from typing import Optional
from fundamentals.bst.solution import TreeNode

def is_symmetric(root: Optional[TreeNode]) -> bool:
    """🟢 Symmetric Tree (LC #101)"""
    def mirror(l, r):
        if not l and not r: return True
        if not l or not r: return False
        return l.val == r.val and mirror(l.left, r.right) and mirror(l.right, r.left)
    return mirror(root.left, root.right) if root else True
