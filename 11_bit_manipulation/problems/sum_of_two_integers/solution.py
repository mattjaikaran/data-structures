

def sum_of_two_integers(a: int, b: int) -> int:
    """🟡 Sum of Two Integers (LC #371) — add without + or -
    Use XOR for sum bits, AND+shift for carry.
    Python ints are arbitrary precision; mask to 32 bits.
    """
    mask = 0xFFFFFFFF
    while b & mask:
        carry = (a & b) << 1
        a = a ^ b
        b = carry
    # Handle Python's arbitrary precision negative numbers
    return a if b == 0 else a & mask
