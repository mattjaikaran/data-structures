import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.coin_change.solution import coin_change

assert coin_change([1,5,11], 15) == 3
assert coin_change([1,2,5], 11) == 3
assert coin_change([2], 3) == -1
print("PASS 12_dynamic_programming/coin_change (py)")
