from __future__ import annotations

def prefix_sum(nums: list[int]) -> list[int]:
    """
    Build prefix sum array.
    prefix[i] = sum of nums[0..i-1]  (prefix[0] = 0 as sentinel)

    Range sum [l, r] = prefix[r+1] - prefix[l]
    Time: O(n) build, O(1) query  Space: O(n)
    """
    prefix = [0] * (len(nums) + 1)
    for i, n in enumerate(nums):
        prefix[i + 1] = prefix[i] + n
    return prefix
