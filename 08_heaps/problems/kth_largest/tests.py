import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.kth_largest.solution import kth_largest

assert kth_largest([3,2,1,5,6,4],2)==5
assert kth_largest([3,2,3,1,2,4,5,5,6],4)==4
print("PASS 08_heaps/kth_largest (py)")
