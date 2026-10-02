import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.merge_sort.solution import merge_sort

test_cases = [
    [64,34,25,12,22,11,90],
    [5,4,3,2,1],
    [1,2,3,4,5],
    [3],
    [],
    [1,1,1,1],
    [-3,1,-1,0,2],
]
expected = [sorted(t) for t in test_cases]
for sort_fn in [merge_sort]:
    for tc, exp in zip(test_cases, expected):
        assert sort_fn(tc) == exp, f"{sort_fn.__name__} failed on {tc}"
    print(f"  ✅ {sort_fn.__name__}")
print("PASS 06_sorting/merge_sort (py)")
