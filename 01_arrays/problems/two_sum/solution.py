from __future__ import annotations
from typing import Optional

def two_pointer_sorted_pair(arr: list[int], target: int) -> Optional[list[int]]:
    """
    Two pointers on a sorted array — find pair summing to target.
    Time: O(n)  Space: O(1)
    """
    left, right = 0, len(arr) - 1
    while left < right:
        s = arr[left] + arr[right]
        if s == target:
            return [left, right]
        elif s < target:
            left += 1
        else:
            right -= 1
    return None

def two_sum(nums: list[int], target: int) -> list[int]:
    """
    🟢 Two Sum (LC #1)
    Return indices of two numbers that add to target.
    Time: O(n)  Space: O(n)
    Pattern: Hash map — store seen[value] = index
    """
    seen: dict[int, int] = {}
    for i, n in enumerate(nums):
        if (comp := target - n) in seen:
            return [seen[comp], i]
        seen[n] = i
    return []
