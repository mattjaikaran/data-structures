import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.bst.solution import TreeNode
from problems.kth_smallest.solution import kth_smallest

kth_root = TreeNode.from_list([3,1,4,None,2])
assert kth_smallest(kth_root, 1) == 1
assert kth_smallest(kth_root, 3) == 3
print("PASS 07_trees/kth_smallest (py)")
