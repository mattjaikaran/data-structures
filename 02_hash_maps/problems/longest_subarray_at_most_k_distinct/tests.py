import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.longest_subarray_at_most_k_distinct.solution import longest_subarray_at_most_k_distinct

assert longest_subarray_at_most_k_distinct("eceba",2)==3
assert longest_subarray_at_most_k_distinct("aa",1)==2
print("PASS 02_hash_maps/longest_subarray_at_most_k_distinct (py)")
