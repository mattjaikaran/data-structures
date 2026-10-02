
def sort_nearly_sorted(arr: list[int], k: int) -> list[int]:
    """🟡 Sort a k-sorted array (each element at most k positions from sorted pos).
    Use min-heap of size k+1. O(n log k).
    """
    import heapq
    heap = arr[:k+1]; heapq.heapify(heap)
    result = []
    for i in range(k+1, len(arr)):
        result.append(heapq.heappushpop(heap, arr[i]))
    while heap: result.append(heapq.heappop(heap))
    return result
