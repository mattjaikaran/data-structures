

def maximum_xor(nums: list[int]) -> int:
    """🟡 Maximum XOR of Two Numbers (LC #421)
    Bit-by-bit greedy: from MSB to LSB, greedily try to set each bit.
    """
    max_xor = 0; prefix = 0
    for i in range(31, -1, -1):
        prefix |= (1 << i)
        prefixes = {n & prefix for n in nums}
        candidate = max_xor | (1 << i)
        if any((candidate ^ p) in prefixes for p in prefixes):
            max_xor = candidate
    return max_xor
