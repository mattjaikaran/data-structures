import heapq

class MaxHeap:
    def __init__(self): self._h = []
    def push(self, v): heapq.heappush(self._h, -v)
    def pop(self): return -heapq.heappop(self._h)
    def peek(self): return -self._h[0]
    def __len__(self): return len(self._h)
