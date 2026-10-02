import heapq

class MedianFinder:
    """🔴 Find Median from Data Stream (LC #295)
    Two heaps: max-heap for lower half, min-heap for upper half.
    Invariant: len(lo) == len(hi) or len(lo) == len(hi)+1
    """
    def __init__(self): self.lo, self.hi = [], []  # lo=max-heap(neg), hi=min-heap
    def add_num(self, n):
        heapq.heappush(self.lo, -n)
        heapq.heappush(self.hi, -heapq.heappop(self.lo))
        if len(self.hi) > len(self.lo): heapq.heappush(self.lo, -heapq.heappop(self.hi))
    def find_median(self):
        if len(self.lo) > len(self.hi): return float(-self.lo[0])
        return (-self.lo[0] + self.hi[0]) / 2.0
