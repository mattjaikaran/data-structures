

def get_bit(n: int, i: int) -> int:
    """Check if bit i is set."""
    return (n >> i) & 1
