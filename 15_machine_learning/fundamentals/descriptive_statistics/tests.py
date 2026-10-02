import sys
from pathlib import Path
from math import isclose

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.descriptive_statistics.solution import mean_variance
assert mean_variance([1,2,3,4]) == (2.5,1.25)
assert mean_variance([7]) == (7,0)
assert mean_variance([1e12-1,1e12,1e12+1]) == (1e12,2/3)
try:
    mean_variance([])
except ValueError:
    pass
else:
    raise AssertionError('Empty statistics accepted')
print('PASS 15_machine_learning/descriptive_statistics (py)')
