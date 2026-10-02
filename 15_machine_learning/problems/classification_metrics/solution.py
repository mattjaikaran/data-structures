from dataclasses import dataclass

@dataclass(frozen=True)
class BinaryMetrics:
    tn: int
    fp: int
    fn: int
    tp: int
    precision: float
    recall: float
    f1: float
    accuracy: float

def binary_metrics(actual: list[int], predicted: list[int]) -> BinaryMetrics:
    if not actual or len(actual) != len(predicted) or any(value not in (0,1) for value in actual + predicted):
        raise ValueError('Require equal nonempty binary inputs')
    tn = fp = fn = tp = 0
    for a,p in zip(actual,predicted):
        if a == 1 and p == 1: tp += 1
        elif a == 1: fn += 1
        elif p == 1: fp += 1
        else: tn += 1
    precision = tp / (tp + fp) if tp + fp else 0.0
    recall = tp / (tp + fn) if tp + fn else 0.0
    f1 = 2 * tp / (2 * tp + fp + fn) if 2 * tp + fp + fn else 0.0
    return BinaryMetrics(tn,fp,fn,tp,precision,recall,f1,(tp+tn)/len(actual))
