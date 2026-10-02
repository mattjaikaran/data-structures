import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.num_trees.solution import count_unique_bst

assert count_unique_bst(3) == 5
assert count_unique_bst(1) == 1
print("PASS 12_dynamic_programming/num_trees (py)")
