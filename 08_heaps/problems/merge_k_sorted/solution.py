import heapq

def merge_k_sorted(lists: list[list[int]]) -> list[int]:
    """🔴 Merge K Sorted Lists — O(n log k)"""
    h = []; result = []
    for i,lst in enumerate(lists):
        if lst: heapq.heappush(h,(lst[0],i,0))
    while h:
        val,i,j = heapq.heappop(h); result.append(val)
        if j+1 < len(lists[i]): heapq.heappush(h,(lists[i][j+1],i,j+1))
    return result
