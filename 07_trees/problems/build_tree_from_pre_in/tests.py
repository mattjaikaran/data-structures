import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.build_tree_from_pre_in.solution import build_from_preorder_inorder
from problems.level_order.solution import level_order

rebuilt = build_from_preorder_inorder([3,9,20,15,7],[9,3,15,20,7])
assert level_order(rebuilt) == [[3],[9,20],[15,7]]
print("PASS 07_trees/build_tree_from_pre_in (py)")
