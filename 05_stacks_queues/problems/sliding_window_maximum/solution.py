from collections import deque

def sliding_window_maximum(nums: list[int], k: int) -> list[int]:
    """🔴 Sliding Window Maximum (LC #239) — monotonic deque. O(n)."""
    dq: deque[int] = deque()  # indices, decreasing values
    result: list[int] = []
    for i, n in enumerate(nums):
        while dq and dq[0] < i - k + 1: dq.popleft()
        while dq and nums[dq[-1]] < n:  dq.pop()
        dq.append(i)
        if i >= k - 1: result.append(nums[dq[0]])
    return result
