import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.four_sum_count.solution import four_sum_count

assert four_sum_count([1,2],[-2,-1],[-1,2],[0,2])==2
print("PASS 02_hash_maps/four_sum_count (py)")
