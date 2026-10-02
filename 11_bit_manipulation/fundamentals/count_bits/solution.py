

def count_bits(n: int) -> int:
    """Brian Kernighan: repeatedly clear lowest set bit. O(# set bits)."""
    count = 0
    while n:
        n &= n - 1  # clear lowest set bit
        count += 1
    return count

def number_of_1_bits(n: int) -> int:
    """🟢 Number of 1 Bits (LC #191) — Hamming weight"""
    return count_bits(n)
