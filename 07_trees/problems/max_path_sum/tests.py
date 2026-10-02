import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.bst.solution import TreeNode
from problems.max_path_sum.solution import max_path_sum

mp_root = TreeNode.from_list([-10,9,20,None,None,15,7])
assert max_path_sum(mp_root) == 42
assert max_path_sum(TreeNode.from_list([1,2,3])) == 6
print("PASS 07_trees/max_path_sum (py)")
