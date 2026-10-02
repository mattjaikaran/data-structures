import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.bst.solution import TreeNode
from problems.max_depth.solution import max_depth

root = TreeNode.from_list([3,9,20,None,None,15,7])
assert max_depth(root) == 3
assert max_depth(None) == 0
print("PASS 07_trees/max_depth (py)")
