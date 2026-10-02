
def broken_calculator(start: int, target: int) -> int:
    """🟡 Broken Calculator (LC #991) — min ops: double or decrement"""
    # Work backwards from target: if even halve, if odd add 1
    ops = 0
    while target > start:
        if target % 2: target += 1
        else: target //= 2
        ops += 1
    return ops + (start - target)
