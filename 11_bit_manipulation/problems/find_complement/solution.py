

def find_complement(num: int) -> int:
    """🟢 Complement of Base 10 Integer (LC #1009)"""
    bit_length = num.bit_length()
    mask = (1 << bit_length) - 1
    return num ^ mask
