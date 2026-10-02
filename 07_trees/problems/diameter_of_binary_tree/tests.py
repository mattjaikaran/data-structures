import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.bst.solution import TreeNode
from problems.diameter_of_binary_tree.solution import diameter

d_root = TreeNode.from_list([1,2,3,4,5])
assert diameter(d_root) == 3
print("PASS 07_trees/diameter_of_binary_tree (py)")
