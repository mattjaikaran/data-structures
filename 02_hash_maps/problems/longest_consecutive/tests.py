import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.longest_consecutive.solution import longest_consecutive

assert longest_consecutive([100,4,200,1,3,2])==4
assert longest_consecutive([0,3,7,2,5,8,4,6,0,1])==9
print("PASS 02_hash_maps/longest_consecutive (py)")
