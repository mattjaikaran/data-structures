import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.radix_sort.solution import radix_sort

assert radix_sort([170,45,75,90,802,24,2,66]) == [2,24,45,66,75,90,170,802]
assert radix_sort([]) == []
print("PASS 06_sorting/radix_sort (py)")
