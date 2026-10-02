import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.dynamic_array.solution import DynamicArray

da = DynamicArray()
for v in range(10):
    da.append(v)
assert len(da) == 10
assert da[0] == 0 and da[9] == 9
da.insert(3, 99)
assert da[3] == 99 and len(da) == 11
da.remove(3)
assert da[3] == 3 and len(da) == 10
print("PASS 01_arrays/dynamic_array (py)")
