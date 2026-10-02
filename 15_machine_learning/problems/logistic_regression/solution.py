from dataclasses import dataclass
from math import exp, fsum

def sigmoid(value: float) -> float:
    if value >= 0:
        return 1 / (1 + exp(-value))
    weight = exp(value)
    return weight / (1 + weight)

@dataclass(frozen=True)
class LogisticModel:
    slope: float
    bias: float

    def probability(self, x: float) -> float:
        return sigmoid(self.slope * x + self.bias)

    def predict(self, x: float) -> int:
        return int(self.probability(x) >= 0.5)

def fit_logistic_regression(xs: list[float], ys: list[int], learning_rate: float = 0.1, steps: int = 1000) -> LogisticModel:
    if not xs or len(xs) != len(ys) or any(y not in (0,1) for y in ys) or learning_rate <= 0 or steps < 1:
        raise ValueError('Invalid binary training inputs')
    slope = bias = 0.0
    for _ in range(steps):
        errors = [sigmoid(slope * x + bias) - y for x, y in zip(xs, ys)]
        slope -= learning_rate * fsum(error * x for error, x in zip(errors, xs)) / len(xs)
        bias -= learning_rate * fsum(errors) / len(xs)
    return LogisticModel(slope, bias)
