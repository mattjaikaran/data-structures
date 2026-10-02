import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.total_hamming_distance.solution import total_hamming_distance

assert total_hamming_distance([4,14,2]) == 6
print("PASS 11_bit_manipulation/total_hamming_distance (py)")
