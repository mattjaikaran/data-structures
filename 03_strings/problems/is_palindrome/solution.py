
def is_palindrome(s: str) -> bool:
    """🟢 Valid Palindrome (LC #125) — alphanumeric only"""
    s = ''.join(c.lower() for c in s if c.isalnum())
    return s == s[::-1]
