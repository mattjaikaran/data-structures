import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.unique_paths.solution import unique_paths

assert unique_paths(3,7) == 28
assert unique_paths(3,2) == 3
print("PASS 12_dynamic_programming/unique_paths (py)")
