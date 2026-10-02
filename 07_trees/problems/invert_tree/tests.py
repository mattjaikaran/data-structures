import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.bst.solution import TreeNode
from problems.invert_tree.solution import invert_tree

root = TreeNode.from_list([1, 2, 3])
assert invert_tree(root) is root
assert root.left.val == 3 and root.right.val == 2
assert invert_tree(None) is None
print("PASS 07_trees/invert_tree (py)")
