from __future__ import annotations
from typing import Optional
from fundamentals.bst.solution import TreeNode

def kth_smallest(root: Optional[TreeNode], k: int) -> int:
    """🟡 Kth Smallest Element in a BST (LC #230) — iterative inorder"""
    stack, cur, count = [], root, 0
    while stack or cur:
        while cur: stack.append(cur); cur = cur.left
        cur = stack.pop(); count += 1
        if count == k: return cur.val
        cur = cur.right
    return -1
