import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.is_valid_parens.solution import is_valid_parens

assert is_valid_parens("()[]{}")
assert is_valid_parens("([])")
assert not is_valid_parens("(]")
assert not is_valid_parens("([)]")
assert is_valid_parens("")
print("PASS 05_stacks_queues/is_valid_parens (py)")
