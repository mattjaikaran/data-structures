import sys
from pathlib import Path
from math import isclose

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.classification_metrics.solution import binary_metrics
metrics = binary_metrics([1,1,1,0],[1,0,0,0])
assert (metrics.tn,metrics.fp,metrics.fn,metrics.tp) == (1,0,2,1)
assert metrics.precision == 1 and isclose(metrics.recall,1/3)
assert metrics.f1 == 0.5 and metrics.accuracy == 0.5
metrics = binary_metrics([0,0],[0,0])
assert (metrics.precision,metrics.recall,metrics.f1,metrics.accuracy) == (0,0,0,1)
try:
    binary_metrics([1],[2])
except ValueError:
    pass
else:
    raise AssertionError('Nonbinary prediction accepted')
print('PASS 15_machine_learning/classification_metrics (py)')
