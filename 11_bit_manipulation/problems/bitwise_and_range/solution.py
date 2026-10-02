

def bitwise_and_range(left: int, right: int) -> int:
    """🟡 Bitwise AND of Numbers Range (LC #201)
    AND of [left, right] = common prefix of left and right in binary.
    Shift both right until equal, then shift back.
    """
    shift = 0
    while left != right:
        left >>= 1; right >>= 1; shift += 1
    return left << shift
