import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.counting_sort.solution import counting_sort

assert counting_sort([4,2,2,8,3,3,1]) == [1,2,2,3,3,4,8]
assert counting_sort([]) == []
print("PASS 06_sorting/counting_sort (py)")
