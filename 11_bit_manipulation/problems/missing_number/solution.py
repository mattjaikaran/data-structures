

def missing_number(nums: list[int]) -> int:
    """🟢 Missing Number (LC #268)
    XOR all indices 0..n and all values. Pair cancel, lone = missing.
    """
    result = len(nums)
    for i, n in enumerate(nums): result ^= i ^ n
    return result
