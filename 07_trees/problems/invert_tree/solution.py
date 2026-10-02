from __future__ import annotations
from typing import Optional
from fundamentals.bst.solution import TreeNode

def invert_tree(root: Optional[TreeNode]) -> Optional[TreeNode]:
    """🟢 Invert Binary Tree (LC #226)"""
    if not root: return None
    root.left, root.right = invert_tree(root.right), invert_tree(root.left)
    return root
