import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.house_robber_ii.solution import house_robber_ii

assert house_robber_ii([2,3,2]) == 3
assert house_robber_ii([1,2,3,1]) == 4
print("PASS 12_dynamic_programming/house_robber_ii (py)")
