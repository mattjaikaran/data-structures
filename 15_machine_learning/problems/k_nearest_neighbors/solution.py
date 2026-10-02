from collections import Counter
from math import fsum

def knn_predict(training: list[list[float]], labels: list[int], query: list[float], k: int) -> int:
    if not query or len(training) != len(labels) or not 1 <= k <= len(training) or any(len(row) != len(query) for row in training):
        raise ValueError('Invalid nearest-neighbor inputs')
    neighbors = sorted((fsum((a-b)**2 for a,b in zip(row,query)), index) for index,row in enumerate(training))[:k]
    votes = Counter(labels[index] for _,index in neighbors)
    return min(votes, key=lambda label: (-votes[label], label))
