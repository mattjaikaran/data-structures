

def single_number_iii(nums: list[int]) -> list[int]:
    """🟡 Single Number III (LC #260)
    Two elements appear once, rest appear twice.
    XOR all → xor of two unique nums. Split by differing bit.
    """
    xor = 0
    for n in nums: xor ^= n
    diff_bit = xor & (-xor)  # lowest set bit where the two numbers differ
    a = b = 0
    for n in nums:
        if n & diff_bit: a ^= n
        else: b ^= n
    return [a, b]
