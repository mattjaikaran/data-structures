def valid_palindrome_ii(text: str) -> bool:
    def palindrome(lo: int, hi: int) -> bool:
        while lo < hi:
            if text[lo] != text[hi]:
                return False
            lo, hi = lo + 1, hi - 1
        return True
    lo, hi = 0, len(text) - 1
    while lo < hi:
        if text[lo] != text[hi]:
            return palindrome(lo + 1, hi) or palindrome(lo, hi - 1)
        lo, hi = lo + 1, hi - 1
    return True
