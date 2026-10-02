import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.generate_parentheses.solution import generate_parentheses

assert sorted(generate_parentheses(3)) == sorted(["((()))","(()())","(())()","()(())","()()()"])
assert generate_parentheses(1) == ["()"]
print("PASS 05_stacks_queues/generate_parentheses (py)")
