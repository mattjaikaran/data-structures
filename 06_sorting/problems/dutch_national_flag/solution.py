
def dutch_national_flag(nums: list[int]) -> list[int]:
    """🟡 Sort array of 0s, 1s, 2s in O(n) with O(1) space (LC #75).
    Three-way partition (also the core of 3-way quicksort).
    """
    lo = mid = 0; hi = len(nums) - 1
    nums = nums[:]
    while mid <= hi:
        if nums[mid] == 0: nums[lo], nums[mid] = nums[mid], nums[lo]; lo += 1; mid += 1
        elif nums[mid] == 1: mid += 1
        else: nums[mid], nums[hi] = nums[hi], nums[mid]; hi -= 1
    return nums
