from __future__ import annotations

def search_rotated(nums: list[int], target: int) -> int:
    """
    🟡 Search in Rotated Sorted Array (LC #33)
    Time: O(log n)  Space: O(1)

    KEY INSIGHT: One half is ALWAYS sorted. Check which half,
    then determine if target is within that sorted range.
    """
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target:
            return mid
        if nums[l] <= nums[mid]:        # left half sorted
            if nums[l] <= target < nums[mid]:
                r = mid - 1
            else:
                l = mid + 1
        else:                           # right half sorted
            if nums[mid] < target <= nums[r]:
                l = mid + 1
            else:
                r = mid - 1
    return -1
