
def wiggle_subsequence(nums: list[int]) -> int:
    """🟡 Wiggle Subsequence (LC #376)"""
    up = down = 1
    for i in range(1, len(nums)):
        if nums[i] > nums[i-1]: up = down + 1
        elif nums[i] < nums[i-1]: down = up + 1
    return max(up, down)
