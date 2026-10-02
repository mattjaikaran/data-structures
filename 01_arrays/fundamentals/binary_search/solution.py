from __future__ import annotations

def binary_search(arr: list[int], target: int) -> int:
    """
    Binary Search on a sorted array.
    Returns index of target, or -1 if not found.
    Time: O(log n)  Space: O(1)

    KEY INSIGHT: (left + right) // 2 can overflow in other languages —
    use left + (right - left) // 2 as a habit.
    """
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
