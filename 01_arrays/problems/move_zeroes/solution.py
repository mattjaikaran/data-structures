from __future__ import annotations

def move_zeroes(nums: list[int]) -> None:
    """
    🟢 Move Zeroes (LC #283) — in-place.
    Time: O(n)  Space: O(1)
    Pattern: Two pointers — left = insert slot for non-zeros.
    """
    left = 0
    for right in range(len(nums)):
        if nums[right] != 0:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
