import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.minimum_cost_tree.solution import minimum_cost_tree

assert minimum_cost_tree([6, 2, 4]) == 32
assert minimum_cost_tree([4, 11]) == 44
print("PASS 12_dynamic_programming/minimum_cost_tree (py)")
