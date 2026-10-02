from __future__ import annotations
from typing import Optional
from fundamentals.bst.solution import TreeNode

def lca(root: Optional[TreeNode], p: TreeNode, q: TreeNode) -> Optional[TreeNode]:
    """🟡 Lowest Common Ancestor (LC #236)"""
    if not root or root is p or root is q: return root
    left = lca(root.left, p, q)
    right = lca(root.right, p, q)
    return root if left and right else left or right
