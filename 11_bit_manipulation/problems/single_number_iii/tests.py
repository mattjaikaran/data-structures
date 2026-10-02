import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.single_number_iii.solution import single_number_iii

result = single_number_iii([1,2,1,3,2,5])
assert set(result) == {3, 5}
print("PASS 11_bit_manipulation/single_number_iii (py)")
