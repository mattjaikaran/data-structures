"""
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TREES  ·  Python
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BST PROPERTY: left.val < node.val < right.val for every node
TRAVERSALS  : Inorder (→ sorted), Preorder, Postorder, Level-order (BFS)
AVL TREE    : Self-balancing BST — guarantees O(log n) via rotations
"""

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


# ══════════════════════════════════════════════
# BST
# ══════════════════════════════════════════════

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


# ══════════════════════════════════════════════
# INTERVIEW PROBLEMS
# ══════════════════════════════════════════════

def max_depth(root: Optional[TreeNode]) -> int:
    """🟢 Maximum Depth of Binary Tree (LC #104)"""
    if not root: return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))

def invert_tree(root: Optional[TreeNode]) -> Optional[TreeNode]:
    """🟢 Invert Binary Tree (LC #226)"""
    if not root: return None
    root.left, root.right = invert_tree(root.right), invert_tree(root.left)
    return root

def is_symmetric(root: Optional[TreeNode]) -> bool:
    """🟢 Symmetric Tree (LC #101)"""
    def mirror(l, r):
        if not l and not r: return True
        if not l or not r: return False
        return l.val == r.val and mirror(l.left, r.right) and mirror(l.right, r.left)
    return mirror(root.left, root.right) if root else True

def diameter(root: Optional[TreeNode]) -> int:
    """🟢 Diameter of Binary Tree (LC #543)"""
    best = [0]
    def height(n):
        if not n: return 0
        l, r = height(n.left), height(n.right)
        best[0] = max(best[0], l + r)
        return 1 + max(l, r)
    height(root); return best[0]

def level_order(root: Optional[TreeNode]) -> list[list[int]]:
    """🟡 Binary Tree Level Order Traversal (LC #102)"""
    if not root: return []
    result, q = [], deque([root])
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
        result.append(level)
    return result

def right_side_view(root: Optional[TreeNode]) -> list[int]:
    """🟡 Binary Tree Right Side View (LC #199)"""
    result, q = [], deque([root]) if root else deque()
    while q:
        for i in range(len(q)):
            node = q.popleft()
            if i == len(q): pass  # last of this level added below
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
        result.append(node.val)  # type: ignore
    return result

def lca(root: Optional[TreeNode], p: TreeNode, q: TreeNode) -> Optional[TreeNode]:
    """🟡 Lowest Common Ancestor (LC #236)"""
    if not root or root is p or root is q: return root
    left = lca(root.left, p, q)
    right = lca(root.right, p, q)
    return root if left and right else left or right

def build_from_preorder_inorder(preorder: list[int], inorder: list[int]) -> Optional[TreeNode]:
    """🟡 Construct Binary Tree from Preorder and Inorder (LC #105)"""
    if not preorder: return None
    root = TreeNode(preorder[0])
    mid = inorder.index(preorder[0])
    root.left  = build_from_preorder_inorder(preorder[1:mid+1], inorder[:mid])
    root.right = build_from_preorder_inorder(preorder[mid+1:], inorder[mid+1:])
    return root

def kth_smallest(root: Optional[TreeNode], k: int) -> int:
    """🟡 Kth Smallest Element in a BST (LC #230) — iterative inorder"""
    stack, cur, count = [], root, 0
    while stack or cur:
        while cur: stack.append(cur); cur = cur.left
        cur = stack.pop(); count += 1
        if count == k: return cur.val
        cur = cur.right
    return -1

def max_path_sum(root: Optional[TreeNode]) -> int:
    """🔴 Binary Tree Maximum Path Sum (LC #124)"""
    best = [float('-inf')]
    def gain(n):
        if not n: return 0
        l, r = max(gain(n.left), 0), max(gain(n.right), 0)
        best[0] = max(best[0], l + r + n.val)
        return n.val + max(l, r)
    gain(root); return int(best[0])

def serialize(root: Optional[TreeNode]) -> str:
    """🔴 Serialize Binary Tree (LC #297)"""
    if not root: return "null"
    res, q = [], deque([root])
    while q:
        node = q.popleft()
        if node:
            res.append(str(node.val)); q.append(node.left); q.append(node.right)
        else:
            res.append("null")
    return ','.join(res)

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

def is_balanced(root: Optional[TreeNode]) -> bool:
    """🟡 Balanced Binary Tree (LC #110)"""
    def check(n):
        if not n: return 0
        l, r = check(n.left), check(n.right)
        if l == -1 or r == -1 or abs(l - r) > 1: return -1
        return 1 + max(l, r)
    return check(root) != -1

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


# ══════════════════════════════════════════════
# TESTS
# ══════════════════════════════════════════════

def run_tests() -> None:
    print("Running tree tests...\n")

    # BST
    bst = BST()
    for v in [5,3,7,1,4,6,8]: bst.insert(v)
    assert bst.inorder() == [1,3,4,5,6,7,8]
    assert bst.search(4) and not bst.search(9)
    bst.delete(3)
    assert bst.inorder() == [1,4,5,6,7,8]
    print("  ✅ BST: insert / search / delete / inorder")

    root = TreeNode.from_list([3,9,20,None,None,15,7])
    assert max_depth(root) == 3
    assert max_depth(None) == 0
    print("  ✅ max_depth: standard / empty")

    sym = TreeNode.from_list([1,2,2,3,4,4,3])
    assert is_symmetric(sym)
    asym = TreeNode.from_list([1,2,2,None,3,None,3])
    assert not is_symmetric(asym)
    print("  ✅ is_symmetric: symmetric / asymmetric")

    d_root = TreeNode.from_list([1,2,3,4,5])
    assert diameter(d_root) == 3
    print("  ✅ diameter")

    lo_root = TreeNode.from_list([3,9,20,None,None,15,7])
    assert level_order(lo_root) == [[3],[9,20],[15,7]]
    assert level_order(None) == []
    print("  ✅ level_order: standard / empty")

    rv = TreeNode.from_list([1,2,3,None,5,None,4])
    assert right_side_view(rv) == [1,3,4]
    print("  ✅ right_side_view")

    lca_root = TreeNode.from_list([3,5,1,6,2,0,8,None,None,7,4])
    p = lca_root.left          # type: ignore  val=5
    q_node = lca_root.right    # type: ignore  val=1
    assert lca(lca_root, p, q_node).val == 3  # type: ignore
    print("  ✅ lca")

    rebuilt = build_from_preorder_inorder([3,9,20,15,7],[9,3,15,20,7])
    assert level_order(rebuilt) == [[3],[9,20],[15,7]]
    print("  ✅ build_from_preorder_inorder")

    kth_root = TreeNode.from_list([3,1,4,None,2])
    assert kth_smallest(kth_root, 1) == 1
    assert kth_smallest(kth_root, 3) == 3
    print("  ✅ kth_smallest")

    mp_root = TreeNode.from_list([-10,9,20,None,None,15,7])
    assert max_path_sum(mp_root) == 42
    assert max_path_sum(TreeNode.from_list([1,2,3])) == 6
    print("  ✅ max_path_sum")

    s_root = TreeNode.from_list([1,2,3,None,None,4,5])
    data = serialize(s_root)
    restored = deserialize(data)
    assert serialize(restored) == data
    print("  ✅ serialize / deserialize")

    assert is_balanced(TreeNode.from_list([3,9,20,None,None,15,7]))
    assert not is_balanced(TreeNode.from_list([1,2,2,3,3,None,None,4,4]))
    print("  ✅ is_balanced: balanced / unbalanced")

    ps_root = TreeNode.from_list([5,4,8,11,None,13,4,7,2,None,None,5,1])
    paths = path_sum(ps_root, 22)
    assert sorted(map(sorted, paths)) == sorted(map(sorted, [[5,4,11,2],[5,8,4,5]]))
    print("  ✅ path_sum")

    print("\n🎉 All tree tests passed!")

if __name__ == "__main__":
    run_tests()
