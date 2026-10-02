import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.bst.solution import TreeNode
from problems.lowest_common_ancestor.solution import lca

lca_root = TreeNode.from_list([3,5,1,6,2,0,8,None,None,7,4])
p = lca_root.left
q_node = lca_root.right
assert lca(lca_root, p, q_node).val == 3
print("PASS 07_trees/lowest_common_ancestor (py)")
