from math import ceil
from random import Random

def train_test_split(features: list[list[float]], labels: list[int | float], test_fraction: float = 0.2, seed: int = 0) -> tuple[list[list[float]], list[list[float]], list[int | float], list[int | float]]:
    if len(features) != len(labels) or not 0 < test_fraction < 1:
        raise ValueError('Invalid split inputs')
    test_count = ceil(len(features) * test_fraction)
    if test_count < 1 or test_count >= len(features):
        raise ValueError('Require nonempty train and test sets')
    indices = list(range(len(features)))
    Random(seed).shuffle(indices)
    test, train = indices[:test_count], indices[test_count:]
    return ([features[i] for i in train], [features[i] for i in test],
            [labels[i] for i in train], [labels[i] for i in test])
