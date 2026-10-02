from math import inf, sqrt
from fundamentals.matrix_multiply.solution import matrix_multiply
from fundamentals.stable_softmax.solution import softmax

def attention(queries: list[list[float]], keys: list[list[float]], values: list[list[float]], causal: bool = False) -> list[list[float]]:
    if not queries or not keys or not values or not keys[0] or len(keys) != len(values):
        raise ValueError('Invalid attention dimensions')
    if any(len(key) != len(keys[0]) for key in keys):
        raise ValueError('Key dimensions differ')
    if causal and len(queries) != len(keys):
        raise ValueError('Causal attention requires matching sequence lengths')
    transposed_keys = [list(column) for column in zip(*keys)]
    scores = matrix_multiply(queries,transposed_keys)
    scale = sqrt(len(keys[0]))
    weights = [softmax([-inf if causal and column > row else value / scale for column,value in enumerate(score)]) for row,score in enumerate(scores)]
    return matrix_multiply(weights,values)
