import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.boats_to_save_people.solution import boats_to_save_people

assert boats_to_save_people([1,2],3) == 1
assert boats_to_save_people([3,2,2,1],3) == 3
print("PASS 14_greedy/boats_to_save_people (py)")
