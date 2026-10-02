from math import fsum, hypot

def dot(a: list[float], b: list[float]) -> float:
    if len(a) != len(b):
        raise ValueError('Vector dimensions differ')
    return fsum(x * y for x, y in zip(a, b))

def l2_norm(vector: list[float]) -> float:
    return hypot(*vector)
