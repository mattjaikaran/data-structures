from math import exp, fsum, inf, isnan

def softmax(logits: list[float]) -> list[float]:
    if not logits or any(isnan(value) or value == inf for value in logits):
        raise ValueError('Invalid logits')
    largest = max(logits)
    if largest == -inf:
        raise ValueError('All logits are masked')
    weights = [exp(value - largest) for value in logits]
    total = fsum(weights)
    return [weight / total for weight in weights]
