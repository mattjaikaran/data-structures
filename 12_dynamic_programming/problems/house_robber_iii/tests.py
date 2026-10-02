import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.house_robber_iii.solution import TreeNode, house_robber_iii

root = TreeNode(3, TreeNode(2,None,TreeNode(3)), TreeNode(3,None,TreeNode(1)))
assert house_robber_iii(root) == 7
print("PASS 12_dynamic_programming/house_robber_iii (py)")
