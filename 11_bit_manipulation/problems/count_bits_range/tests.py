import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.count_bits_range.solution import count_bits_range

assert count_bits_range(5) == [0,1,1,2,1,2]
assert count_bits_range(2) == [0,1,1]
print("PASS 11_bit_manipulation/count_bits_range (py)")
