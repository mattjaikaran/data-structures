import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.lemonade_change.solution import lemonade_change

assert lemonade_change([5,5,5,10,20]) == True
assert lemonade_change([5,5,10,10,20]) == False
print("PASS 14_greedy/lemonade_change (py)")
