import sys
from pathlib import Path
from math import isclose

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from math import exp, sqrt
from problems.scaled_dot_product_attention.solution import attention
result = attention([[1,0]],[[1,0],[0,1]],[[10],[20]])
weight = exp(1/sqrt(2))/(exp(1/sqrt(2))+1)
assert isclose(result[0][0],10*weight+20*(1-weight))
causal = attention([[0],[0]],[[0],[0]],[[2],[8]],True)
assert causal == [[2],[5]], 'Future values must not influence earlier rows'
assert attention([[0]],[[0],[0]],[[2,4],[8,10]]) == [[5,7]]
for q,k,v,causal in [([[1]],[[1,2]],[[1]],False), ([[1]],[[1]],[[1],[2]],False), ([[1]],[[1],[2]],[[1],[2]],True)]:
    try:
        attention(q,k,v,causal)
    except ValueError:
        pass
    else:
        raise AssertionError('Invalid attention shapes accepted')
print('PASS 15_machine_learning/scaled_dot_product_attention (py)')
