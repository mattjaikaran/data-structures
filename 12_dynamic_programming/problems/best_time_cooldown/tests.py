import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.best_time_cooldown.solution import best_time_with_cooldown

assert best_time_with_cooldown([1,2,3,0,2]) == 3
print("PASS 12_dynamic_programming/best_time_cooldown (py)")
