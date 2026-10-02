
def is_isomorphic(s: str, t: str) -> bool:
    """🟢 Isomorphic Strings (LC #205)"""
    return len(set(zip(s,t)))==len(set(s))==len(set(t))
