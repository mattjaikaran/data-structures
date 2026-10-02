import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.bst.solution import TreeNode
from problems.right_side_view.solution import right_side_view

rv = TreeNode.from_list([1,2,3,None,5,None,4])
assert right_side_view(rv) == [1,3,4]
print("PASS 07_trees/right_side_view (py)")
