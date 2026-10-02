import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.maximum_xor.solution import maximum_xor

assert maximum_xor([3,10,5,25,2,8]) == 28
print("PASS 11_bit_manipulation/maximum_xor (py)")
