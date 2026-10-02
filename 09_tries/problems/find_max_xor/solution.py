

def find_max_xor(nums: list[int]) -> int:
    """🟡 Maximum XOR of Two Numbers (LC #421) — bit trie"""
    max_xor = 0; prefix = 0
    for mask in range(31, -1, -1):
        prefix |= (1 << mask)
        prefixes = set(n & prefix for n in nums)
        candidate = max_xor | (1 << mask)
        if any((candidate ^ p) in prefixes for p in prefixes):
            max_xor = candidate
    return max_xor
