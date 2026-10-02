import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.partition_equal_subset.solution import partition_equal_subset

assert partition_equal_subset([1,5,11,5])
assert not partition_equal_subset([1,2,3,5])
print("PASS 12_dynamic_programming/partition_equal_subset (py)")
