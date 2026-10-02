from __future__ import annotations

def contains_duplicate(nums: list[int]) -> bool:
    """
    🟢 Contains Duplicate (LC #217)
    Time: O(n)  Space: O(n)
    """
    return len(nums) != len(set(nums))
