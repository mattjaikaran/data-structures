from __future__ import annotations
from typing import Optional
from fundamentals.bst.solution import TreeNode

def path_sum(root: Optional[TreeNode], target: int) -> list[list[int]]:
    """🟡 Path Sum II (LC #113) — all root-to-leaf paths summing to target"""
    result: list[list[int]] = []
    def dfs(node, rem, path):
        if not node: return
        path.append(node.val)
        if not node.left and not node.right and rem == node.val:
            result.append(list(path))
        dfs(node.left, rem - node.val, path)
        dfs(node.right, rem - node.val, path)
        path.pop()
    dfs(root, target, [])
    return result
