import heapq
from collections import Counter

def rearrange_string_k_apart(s: str, k: int) -> str:
    """🔴 Rearrange String k Distance Apart — greedy + max heap"""
    if k == 0: return s
    count = Counter(s)
    heap = [(-v, c) for c, v in count.items()]
    heapq.heapify(heap)
    result = []; wait = []
    while heap:
        v, c = heapq.heappop(heap)
        result.append(c)
        wait.append((v+1, c))  # v+1 because v is negative
        if len(wait) >= k:
            wv, wc = wait.pop(0)
            if wv < 0: heapq.heappush(heap, (wv, wc))
    return ''.join(result) if len(result) == len(s) else ""
