import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.bst.solution import BST


bst = BST()
for v in [5,3,7,1,4,6,8]: bst.insert(v)
assert bst.inorder() == [1,3,4,5,6,7,8]
assert bst.search(4) and not bst.search(9)
bst.delete(3)
assert bst.inorder() == [1,4,5,6,7,8]
print('PASS 07_trees/bst (py)')
