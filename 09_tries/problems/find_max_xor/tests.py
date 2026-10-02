import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))

from problems.find_max_xor.solution import find_max_xor

assert find_max_xor([3,10,5,25,2,8]) == 28
print("PASS 09_tries/find_max_xor (py)")
