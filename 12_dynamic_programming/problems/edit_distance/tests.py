import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.edit_distance.solution import edit_distance

assert edit_distance("horse","ros") == 3
assert edit_distance("intention","execution") == 5
assert edit_distance("","abc") == 3
print("PASS 12_dynamic_programming/edit_distance (py)")
