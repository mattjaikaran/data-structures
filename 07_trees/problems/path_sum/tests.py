import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.bst.solution import TreeNode
from problems.path_sum.solution import path_sum

ps_root = TreeNode.from_list([5,4,8,11,None,13,4,7,2,None,None,5,1])
paths = path_sum(ps_root, 22)
assert sorted(map(sorted, paths)) == sorted(map(sorted, [[5,4,11,2],[5,8,4,5]]))
print("PASS 07_trees/path_sum (py)")
