import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.ugly_number.solution import ugly_number

assert ugly_number(10)==12
print("PASS 08_heaps/ugly_number (py)")
