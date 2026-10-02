from __future__ import annotations

def product_except_self(nums: list[int]) -> list[int]:
    """
    🟡 Product of Array Except Self (LC #238)
    No division allowed.
    Time: O(n)  Space: O(1) extra (output array doesn't count)

    Pattern: Two-pass prefix/suffix multiplication.
      Pass 1 left→right: result[i] = product of all nums to the LEFT of i
      Pass 2 right→left: multiply result[i] by product of all to the RIGHT
    """
    n = len(nums)
    result = [1] * n
    # Left pass
    prefix = 1
    for i in range(n):
        result[i] = prefix
        prefix *= nums[i]
    # Right pass
    suffix = 1
    for i in range(n - 1, -1, -1):
        result[i] *= suffix
        suffix *= nums[i]
    return result
