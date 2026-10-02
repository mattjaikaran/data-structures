

def total_hamming_distance(nums: list[int]) -> int:
    """🟡 Total Hamming Distance (LC #477)
    For each bit position, count pairs with different bits:
    ones * zeros (where ones + zeros = n).
    """
    total = 0; n = len(nums)
    for bit in range(32):
        ones = sum((num >> bit) & 1 for num in nums)
        total += ones * (n - ones)
    return total
