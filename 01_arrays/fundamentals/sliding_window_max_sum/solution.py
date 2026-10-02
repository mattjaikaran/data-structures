from __future__ import annotations

def sliding_window_max_sum(nums: list[int], k: int) -> int:
    """
    Maximum sum of any contiguous subarray of size k.
    Time: O(n)  Space: O(1)

    TRICK: instead of re-summing each window, add the new element
    and drop the one that slid out: O(n) not O(n*k).
    """
    window = sum(nums[:k])
    best = window
    for i in range(k, len(nums)):
        window += nums[i] - nums[i - k]
        best = max(best, window)
    return best
