from __future__ import annotations

def three_sum(nums: list[int]) -> list[list[int]]:
    """
    🟡 3Sum (LC #15)
    Find all unique triplets summing to zero.
    Time: O(n²)  Space: O(1)

    Pattern: Sort + two pointers. Skip duplicates to avoid repeat triplets.
    """
    nums.sort()
    result: list[list[int]] = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        l, r = i + 1, len(nums) - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if s == 0:
                result.append([nums[i], nums[l], nums[r]])
                while l < r and nums[l] == nums[l + 1]: l += 1
                while l < r and nums[r] == nums[r - 1]: r -= 1
                l += 1; r -= 1
            elif s < 0:
                l += 1
            else:
                r -= 1
    return result
