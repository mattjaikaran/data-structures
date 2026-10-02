from __future__ import annotations

def find_duplicate(nums: list[int]) -> int:
    """
    🟡 Find the Duplicate Number (LC #287)
    Array of n+1 ints in [1,n]. Find the duplicate without modifying array.

    Treat array as a linked list: index i → index nums[i].
    A duplicate value creates a cycle. Use Floyd's to find the cycle entry.
    O(n) time, O(1) space.
    """
    slow = fast = nums[0]
    while True:
        slow = nums[slow]
        fast = nums[nums[fast]]
        if slow == fast:
            break
    slow = nums[0]
    while slow != fast:
        slow = nums[slow]
        fast = nums[fast]
    return slow
