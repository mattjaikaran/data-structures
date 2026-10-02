

def single_number(nums: list[int]) -> int:
    """🟢 Single Number (LC #136)
    XOR all numbers. Pairs cancel (a^a=0). Lone number survives.
    """
    result = 0
    for n in nums: result ^= n
    return result
