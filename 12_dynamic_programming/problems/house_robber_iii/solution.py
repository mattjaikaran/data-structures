from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def house_robber_iii(root: Optional[TreeNode]) -> int:
    """🟡 House Robber III (LC #337) — rob tree nodes, no adjacent
    At each node: rob it (can't rob children) OR skip it (can rob children)
    Returns (rob_root, skip_root) tuple bottom-up.
    """
    def dp(node):
        if not node: return (0, 0)
        lr, ls = dp(node.left)
        rr, rs = dp(node.right)
        rob = node.val + ls + rs       # rob node → must skip children
        skip = max(lr, ls) + max(rr, rs)  # skip node → children can be either
        return (rob, skip)
    return max(dp(root))
