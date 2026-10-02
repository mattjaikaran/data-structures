
def is_valid_parens(s: str) -> bool:
    """🟢 Valid Parentheses (LC #20) — O(n) time, O(n) space."""
    stack: list[str] = []
    match = {')': '(', '}': '{', ']': '['}
    for ch in s:
        if ch in '({[':
            stack.append(ch)
        elif not stack or stack[-1] != match[ch]:
            return False
        else:
            stack.pop()
    return not stack
