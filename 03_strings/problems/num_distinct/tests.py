import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.num_distinct.solution import num_distinct

assert num_distinct("rabbbit","rabbit")==3
assert num_distinct("babgbag","bag")==5
print("PASS 03_strings/num_distinct (py)")
