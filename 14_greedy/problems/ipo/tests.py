import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.ipo.solution import ipo

assert ipo(2, 0, [1,2,3], [0,1,1]) == 4
print("PASS 14_greedy/ipo (py)")
