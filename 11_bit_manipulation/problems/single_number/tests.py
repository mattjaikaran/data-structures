import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.single_number.solution import single_number

assert single_number([4,1,2,1,2]) == 4
assert single_number([1]) == 1
print("PASS 11_bit_manipulation/single_number (py)")
