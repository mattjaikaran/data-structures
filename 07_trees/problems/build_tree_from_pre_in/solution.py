from __future__ import annotations
from typing import Optional
from fundamentals.bst.solution import TreeNode

def build_from_preorder_inorder(preorder: list[int], inorder: list[int]) -> Optional[TreeNode]:
    """🟡 Construct Binary Tree from Preorder and Inorder (LC #105)"""
    if not preorder: return None
    root = TreeNode(preorder[0])
    mid = inorder.index(preorder[0])
    root.left  = build_from_preorder_inorder(preorder[1:mid+1], inorder[:mid])
    root.right = build_from_preorder_inorder(preorder[mid+1:], inorder[mid+1:])
    return root
