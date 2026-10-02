import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.backspace_compare.solution import backspace_compare

assert backspace_compare("ab#c", "ad#c")
assert backspace_compare("ab##", "c#d#")
assert not backspace_compare("a#c", "b")
print("PASS 05_stacks_queues/backspace_compare (py)")
