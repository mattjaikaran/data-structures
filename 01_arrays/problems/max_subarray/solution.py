from __future__ import annotations


def max_subarray(nums: list[int]) -> int:
    """
    🟡 Maximum Subarray (LC #53) — Kadane's Algorithm
    Time: O(n)  Space: O(1)
    """
    best = current = nums[0]
    for n in nums[1:]:
        current = max(n, current + n)
        best = max(best, current)
    return best
