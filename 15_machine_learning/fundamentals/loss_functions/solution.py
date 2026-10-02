from math import fsum, inf, log, log1p

def mean_squared_error(actual: list[float], predicted: list[float]) -> float:
    if not actual or len(actual) != len(predicted):
        raise ValueError('Require equal nonempty inputs')
    return fsum((a - p) ** 2 for a, p in zip(actual, predicted)) / len(actual)

def binary_cross_entropy(labels: list[int], probabilities: list[float]) -> float:
    if not labels or len(labels) != len(probabilities):
        raise ValueError('Require equal nonempty inputs')
    losses = []
    for label, probability in zip(labels, probabilities):
        if label not in (0,1) or not 0 <= probability <= 1:
            raise ValueError('Invalid binary label or probability')
        if label == 1:
            losses.append(-log(probability) if probability > 0 else inf)
        else:
            losses.append(-log1p(-probability) if probability < 1 else inf)
    return fsum(losses) / len(labels)
