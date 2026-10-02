import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.hamming_distance.solution import hamming_distance

assert hamming_distance(1, 4) == 2
assert hamming_distance(3, 1) == 1
print("PASS 11_bit_manipulation/hamming_distance (py)")
