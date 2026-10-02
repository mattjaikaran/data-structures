from dataclasses import dataclass
from math import fsum

@dataclass(frozen=True)
class LinearModel:
    slope: float
    bias: float

    def predict(self, x: float) -> float:
        return self.slope * x + self.bias

def fit_linear_regression(xs: list[float], ys: list[float], learning_rate: float = 0.05, steps: int = 1000) -> LinearModel:
    if not xs or len(xs) != len(ys) or learning_rate <= 0 or steps < 1:
        raise ValueError('Invalid training inputs')
    slope = bias = 0.0
    count = len(xs)
    for _ in range(steps):
        errors = [slope * x + bias - y for x, y in zip(xs, ys)]
        slope -= learning_rate * 2 * fsum(error * x for error, x in zip(errors, xs)) / count
        bias -= learning_rate * 2 * fsum(errors) / count
    return LinearModel(slope, bias)
