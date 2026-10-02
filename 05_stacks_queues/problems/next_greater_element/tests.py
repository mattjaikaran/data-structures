import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.next_greater_element.solution import next_greater_element

assert next_greater_element([4,1,2],[1,3,4,2]) == [-1,3,-1]
assert next_greater_element([2,4],[1,2,3,4]) == [3,-1]
print("PASS 05_stacks_queues/next_greater_element (py)")
