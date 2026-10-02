import sys
from pathlib import Path
from math import isclose

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.vector_operations.solution import dot, l2_norm
assert dot([1,2,3],[4,-5,6]) == 12
assert dot([],[]) == 0
assert l2_norm([3,4]) == 5
assert l2_norm([]) == 0
assert isclose(l2_norm([1e200,1e200]), 2**0.5 * 1e200)
try:
    dot([1], [1,2])
except ValueError:
    pass
else:
    raise AssertionError('Mismatched dimensions accepted')
print('PASS 15_machine_learning/vector_operations (py)')
