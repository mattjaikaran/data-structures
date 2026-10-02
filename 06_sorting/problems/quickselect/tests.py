import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.quickselect.solution import quickselect

assert quickselect([3,2,1,5,6,4], 2) == 2
assert quickselect([3,2,3,1,2,4,5,5,6], 4) == 3
print("PASS 06_sorting/quickselect (py)")
