import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.merge_k_sorted.solution import merge_k_sorted

assert merge_k_sorted([[1,4,5],[1,3,4],[2,6]])==[1,1,2,3,4,4,5,6]
print("PASS 08_heaps/merge_k_sorted (py)")
