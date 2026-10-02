import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.bst.solution import TreeNode
from problems.is_balanced.solution import is_balanced

assert is_balanced(TreeNode.from_list([3,9,20,None,None,15,7]))
assert not is_balanced(TreeNode.from_list([1,2,2,3,3,None,None,4,4]))
print("PASS 07_trees/is_balanced (py)")
