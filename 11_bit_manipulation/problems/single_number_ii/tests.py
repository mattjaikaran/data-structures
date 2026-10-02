import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.single_number_ii.solution import single_number_ii

assert single_number_ii([2,2,3,2]) == 3
assert single_number_ii([0,1,0,1,0,1,99]) == 99
print("PASS 11_bit_manipulation/single_number_ii (py)")
