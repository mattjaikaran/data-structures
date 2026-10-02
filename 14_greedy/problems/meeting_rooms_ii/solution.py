import heapq

def meeting_rooms_ii(intervals: list[list[int]]) -> int:
    """🟡 Meeting Rooms II (LC #253) — min rooms needed"""
    # Greedy: always assign to room that ends earliest (min-heap)
    intervals.sort()
    heap = []  # end times
    for start, end in intervals:
        if heap and heap[0] <= start:
            heapq.heapreplace(heap, end)
        else:
            heapq.heappush(heap, end)
    return len(heap)
