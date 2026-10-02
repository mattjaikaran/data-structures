from __future__ import annotations
from collections import deque
from typing import Optional

class TreeNode:
    def __init__(self, val: int = 0,
                 left: Optional[TreeNode] = None,
                 right: Optional[TreeNode] = None) -> None:
        self.val = val
        self.left = left
        self.right = right

    @staticmethod
    def from_list(vals: list[Optional[int]]) -> Optional[TreeNode]:
        if not vals or vals[0] is None: return None
        root = TreeNode(vals[0])
        q: deque[TreeNode] = deque([root])
        i = 1
        while q and i < len(vals):
            node = q.popleft()
            if i < len(vals) and vals[i] is not None:
                node.left = TreeNode(vals[i]); q.append(node.left)  # type: ignore
            i += 1
            if i < len(vals) and vals[i] is not None:
                node.right = TreeNode(vals[i]); q.append(node.right)  # type: ignore
            i += 1
        return root

class BST:
    def __init__(self) -> None:
        self.root: Optional[TreeNode] = None

    def insert(self, val: int) -> None:
        def _ins(node, v):
            if not node: return TreeNode(v)
            if v < node.val: node.left = _ins(node.left, v)
            elif v > node.val: node.right = _ins(node.right, v)
            return node
        self.root = _ins(self.root, val)

    def search(self, val: int) -> bool:
        node = self.root
        while node:
            if val == node.val: return True
            node = node.left if val < node.val else node.right
        return False

    def delete(self, val: int) -> None:
        def _del(node, v):
            if not node: return None
            if v < node.val: node.left = _del(node.left, v)
            elif v > node.val: node.right = _del(node.right, v)
            else:
                if not node.left: return node.right
                if not node.right: return node.left
                # Find inorder successor (min of right subtree)
                succ = node.right
                while succ.left: succ = succ.left
                node.val = succ.val
                node.right = _del(node.right, succ.val)
            return node
        self.root = _del(self.root, val)

    def inorder(self) -> list[int]:
        res: list[int] = []
        def dfs(n):
            if n: dfs(n.left); res.append(n.val); dfs(n.right)
        dfs(self.root); return res
