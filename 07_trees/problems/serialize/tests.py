import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.bst.solution import TreeNode
from problems.serialize.solution import serialize
from problems.deserialize.solution import deserialize

s_root = TreeNode.from_list([1,2,3,None,None,4,5])
data = serialize(s_root)
restored = deserialize(data)
assert serialize(restored) == data
print("PASS 07_trees/serialize (py)")
