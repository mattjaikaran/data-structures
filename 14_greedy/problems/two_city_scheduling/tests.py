import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.two_city_scheduling.solution import two_city_scheduling

assert two_city_scheduling([[10,20],[30,200],[400,50],[30,20]]) == 110
print("PASS 14_greedy/two_city_scheduling (py)")
