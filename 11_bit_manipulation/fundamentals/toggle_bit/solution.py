

def toggle_bit(n: int, i: int) -> int:
    """Flip bit i."""
    return n ^ (1 << i)
