from __future__ import annotations

def rotate_right(nums: list[int], k: int) -> None:
    """
    Rotate array right by k steps IN-PLACE.
    Time: O(n)  Space: O(1)

    REVERSAL TRICK:
      [1,2,3,4,5], k=2 → [4,5,1,2,3]
      Step 1: reverse all    → [5,4,3,2,1]
      Step 2: reverse [0:k]  → [4,5,3,2,1]
      Step 3: reverse [k:]   → [4,5,1,2,3]  ✓
    """
    n = len(nums)
    k %= n

    def rev(l: int, r: int) -> None:
        while l < r:
            nums[l], nums[r] = nums[r], nums[l]
            l += 1; r -= 1

    rev(0, n - 1)
    rev(0, k - 1)
    rev(k, n - 1)
