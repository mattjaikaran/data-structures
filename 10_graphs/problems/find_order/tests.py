import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.find_order.solution import find_order

assert find_order(4,[[1,0],[2,0],[3,1],[3,2]]) in [[0,1,2,3],[0,2,1,3]]
print("PASS 10_graphs/find_order (py)")
