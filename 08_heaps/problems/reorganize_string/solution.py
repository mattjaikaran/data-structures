import heapq
from collections import Counter

def reorganize_string(s: str) -> str:
    """🟡 Reorganize String (LC #767) — greedy with max-heap"""
    counts = [(-v,c) for c,v in Counter(s).items()]
    heapq.heapify(counts)
    result = []
    while len(counts) >= 2:
        c1,l1 = heapq.heappop(counts)
        c2,l2 = heapq.heappop(counts)
        result.extend([l1,l2])
        if c1+1 < 0: heapq.heappush(counts,(c1+1,l1))
        if c2+1 < 0: heapq.heappush(counts,(c2+1,l2))
    if counts:
        if counts[0][0] < -1: return ""
        result.append(counts[0][1])
    return "".join(result)
