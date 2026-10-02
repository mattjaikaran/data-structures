from collections.abc import Callable

def finite_difference(function: Callable[[list[float]], float], point: list[float], epsilon: float = 1e-5) -> list[float]:
    if epsilon <= 0:
        raise ValueError('Epsilon must be positive')
    trial, gradient = point[:], []
    for index, value in enumerate(point):
        trial[index] = value + epsilon
        upper = function(trial)
        trial[index] = value - epsilon
        lower = function(trial)
        trial[index] = value
        gradient.append((upper - lower) / (2 * epsilon))
    return gradient
