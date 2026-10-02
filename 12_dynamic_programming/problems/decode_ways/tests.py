import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.decode_ways.solution import decode_ways

assert decode_ways("12") == 2
assert decode_ways("226") == 3
assert decode_ways("06") == 0
print("PASS 12_dynamic_programming/decode_ways (py)")
