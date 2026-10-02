import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.candy.solution import candy

assert candy([1,0,2]) == 5
assert candy([1,2,2]) == 4
print("PASS 14_greedy/candy (py)")
