import sys
from pathlib import Path
from math import isclose

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from math import inf, nan
from fundamentals.stable_softmax.solution import softmax
assert softmax([1000,1000]) == [0.5,0.5]
assert softmax([-1000,-1000]) == [0.5,0.5]
assert softmax([0,-inf]) == [1,0]
assert all(isclose(a,b) for a,b in zip(softmax([1,2,3]),softmax([101,102,103])))
assert isclose(sum(softmax([1,2,3])),1)
for values in [[],[-inf,-inf],[nan],[inf]]:
    try:
        softmax(values)
    except ValueError:
        pass
    else:
        raise AssertionError('Invalid logits accepted')
print('PASS 15_machine_learning/stable_softmax (py)')
