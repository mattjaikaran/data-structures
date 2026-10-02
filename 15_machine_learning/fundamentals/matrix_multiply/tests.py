import sys
from pathlib import Path
from math import isclose

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from fundamentals.matrix_multiply.solution import matrix_multiply
a,b = [[1,2,3],[4,5,6]], [[1,2],[0,1],[-1,0]]
assert matrix_multiply(a,b) == [[-2,4],[-2,13]]
assert a == [[1,2,3],[4,5,6]] and b == [[1,2],[0,1],[-1,0]]
assert matrix_multiply([[3]],[[4]]) == [[12]]
for a,b in [([],[[1]]), ([[1,2]],[[1,2]]), ([[1],[2,3]],[[1]])]:
    try:
        matrix_multiply(a,b)
    except ValueError:
        pass
    else:
        raise AssertionError('Invalid matrix dimensions accepted')
print('PASS 15_machine_learning/matrix_multiply (py)')
