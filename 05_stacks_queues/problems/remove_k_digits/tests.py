import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.remove_k_digits.solution import remove_k_digits

assert remove_k_digits("1432219", 3) == "1219"
assert remove_k_digits("10200", 1) == "200"
assert remove_k_digits("10", 2) == "0"
print("PASS 05_stacks_queues/remove_k_digits (py)")
