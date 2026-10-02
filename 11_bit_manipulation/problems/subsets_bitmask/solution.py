

def subsets_bitmask(nums: list[int]) -> list[list[int]]:
    """🟡 Subsets (LC #78) — use bitmask to enumerate all 2^n subsets"""
    n = len(nums)
    result = []
    for mask in range(1 << n):
        subset = [nums[i] for i in range(n) if mask & (1 << i)]
        result.append(subset)
    return result
