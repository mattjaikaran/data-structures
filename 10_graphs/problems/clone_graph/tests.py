import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.clone_graph.solution import clone_graph

class Node:
    def __init__(self, val):
        self.val = val
        self.neighbors = []
node = Node(1)
other = Node(2)
node.neighbors = [other, node]
other.neighbors = [node]
copy = clone_graph(node)
assert copy is not node and copy.val == 1
assert copy.neighbors[1] is copy
assert copy.neighbors[0].neighbors[0] is copy
assert clone_graph(None) is None
print("PASS 10_graphs/clone_graph (py)")
