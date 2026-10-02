import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.missing_number.solution import missing_number

assert missing_number([3,0,1]) == 2
assert missing_number([0,1]) == 2
assert missing_number([9,6,4,2,3,5,7,0,1]) == 8
print("PASS 11_bit_manipulation/missing_number (py)")
