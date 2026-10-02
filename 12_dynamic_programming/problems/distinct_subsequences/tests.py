import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.distinct_subsequences.solution import distinct_subsequences

assert distinct_subsequences("rabbbit","rabbit") == 3
assert distinct_subsequences("babgbag","bag") == 5
print("PASS 12_dynamic_programming/distinct_subsequences (py)")
