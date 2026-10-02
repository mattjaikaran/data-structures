from math import fsum

def mean_variance(values: list[float]) -> tuple[float, float]:
    if not values:
        raise ValueError('Data must be nonempty')
    mean = fsum(values) / len(values)
    variance = fsum((value - mean) ** 2 for value in values) / len(values)
    return mean, variance
