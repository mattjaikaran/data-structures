import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.coin_change_ways.solution import coin_change_ways

assert coin_change_ways([1,2,5], 5) == 4
print("PASS 12_dynamic_programming/coin_change_ways (py)")
