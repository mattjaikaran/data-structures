import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.house_robber.solution import house_robber

assert house_robber([2,7,9,3,1]) == 12
assert house_robber([1,2,3,1]) == 4
print("PASS 12_dynamic_programming/house_robber (py)")
