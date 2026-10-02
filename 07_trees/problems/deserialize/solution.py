from __future__ import annotations
from collections import deque
from typing import Optional
from fundamentals.bst.solution import TreeNode

def deserialize(data: str) -> Optional[TreeNode]:
    vals = data.split(',')
    if vals[0] == "null": return None
    root = TreeNode(int(vals[0]))
    q: deque[TreeNode] = deque([root])
    i = 1
    while q and i < len(vals):
        node = q.popleft()
        if vals[i] != "null": node.left = TreeNode(int(vals[i])); q.append(node.left)  # type: ignore
        i += 1
        if i < len(vals) and vals[i] != "null": node.right = TreeNode(int(vals[i])); q.append(node.right)  # type: ignore
        i += 1
    return root
