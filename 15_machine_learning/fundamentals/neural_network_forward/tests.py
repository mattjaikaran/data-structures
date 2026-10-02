import sys
from pathlib import Path
from math import isclose

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from math import exp
from fundamentals.neural_network_forward.solution import forward
probabilities = forward([2,-1],[[1,0],[0,1]],[0,0],[[1,-1],[2,2]],[0,0])
assert isclose(probabilities[0],exp(2)/(exp(2)+exp(-2)))
assert isclose(probabilities[1],1-probabilities[0])
assert forward([-2,-1],[[1,0],[0,1]],[0,0],[[1,-1],[2,2]],[0,0]) == [0.5,0.5]
try:
    forward([2,-1],[[1,0],[0,1]],[0],[[1,-1],[2,2]],[0,0])
except ValueError:
    pass
else:
    raise AssertionError('Wrong bias dimension accepted')
print('PASS 15_machine_learning/neural_network_forward (py)')
