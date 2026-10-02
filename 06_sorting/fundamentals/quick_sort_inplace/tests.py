import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.quick_sort_inplace.solution import quick_sort_inplace

values = [3, 1, 2, 1]
assert quick_sort_inplace(values) == [1, 1, 2, 3]
assert values == [3, 1, 2, 1]
assert quick_sort_inplace(values, 0, 3) is values
assert values == [1, 1, 2, 3]
print("PASS 06_sorting/quick_sort_inplace (py)")
