import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.assign_cookies.solution import assign_cookies

assert assign_cookies([1,2,3],[1,1]) == 1
assert assign_cookies([1,2],[1,2,3]) == 2
print("PASS 14_greedy/assign_cookies (py)")
