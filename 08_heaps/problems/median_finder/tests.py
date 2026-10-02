import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.median_finder.solution import MedianFinder

mf = MedianFinder()
for n in [1,2,3]: mf.add_num(n)
assert mf.find_median()==2.0
mf.add_num(4)
assert mf.find_median()==2.5
print("PASS 08_heaps/median_finder (py)")
