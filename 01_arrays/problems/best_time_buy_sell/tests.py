import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.best_time_buy_sell.solution import best_time_buy_sell

assert best_time_buy_sell([7, 1, 5, 3, 6, 4]) == 5
assert best_time_buy_sell([7, 6, 4, 3, 1]) == 0
assert best_time_buy_sell([1, 2]) == 1
print("PASS 01_arrays/best_time_buy_sell (py)")
