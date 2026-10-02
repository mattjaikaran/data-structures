

def clear_bit(n: int, i: int) -> int:
    """Clear bit i to 0."""
    return n & ~(1 << i)
