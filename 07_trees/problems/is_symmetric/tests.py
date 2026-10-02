import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.bst.solution import TreeNode
from problems.is_symmetric.solution import is_symmetric

sym = TreeNode.from_list([1,2,2,3,4,4,3])
assert is_symmetric(sym)
asym = TreeNode.from_list([1,2,2,None,3,None,3])
assert not is_symmetric(asym)
print("PASS 07_trees/is_symmetric (py)")
