

def lowest_set_bit(n: int) -> int:
    """Isolate the lowest set bit. n & -n = n & ~(n-1)."""
    return n & (-n)
