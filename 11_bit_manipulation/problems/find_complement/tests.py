import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.find_complement.solution import find_complement

assert find_complement(5) == 2
assert find_complement(1) == 0
print("PASS 11_bit_manipulation/find_complement (py)")
