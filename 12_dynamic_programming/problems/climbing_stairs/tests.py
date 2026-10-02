import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.climbing_stairs.solution import climbing_stairs

assert climbing_stairs(5) == 8
assert climbing_stairs(2) == 2
print("PASS 12_dynamic_programming/climbing_stairs (py)")
