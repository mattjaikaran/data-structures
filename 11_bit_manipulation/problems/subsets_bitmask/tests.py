import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.subsets_bitmask.solution import subsets_bitmask

subsets = subsets_bitmask([1,2,3])
assert len(subsets) == 8 and [] in subsets and [1,2,3] in subsets
print("PASS 11_bit_manipulation/subsets_bitmask (py)")
