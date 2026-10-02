

def single_number_ii(nums: list[int]) -> int:
    """🟡 Single Number II (LC #137)
    Every element appears 3x except one (appears once).
    Count each bit mod 3.
    """
    ones = twos = 0
    for n in nums:
        ones = (ones ^ n) & ~twos
        twos = (twos ^ n) & ~ones
    return ones
