import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.best_time_with_fee.solution import best_time_with_fee

assert best_time_with_fee([1,3,2,8,4,9], 2) == 8
print("PASS 12_dynamic_programming/best_time_with_fee (py)")
