
def remove_k_digits(num: str, k: int) -> str:
    """🟡 Remove K Digits (LC #402) — monotonic increasing stack. O(n)."""
    stack: list[str] = []
    for d in num:
        while k and stack and stack[-1] > d:
            stack.pop(); k -= 1
        stack.append(d)
    result = ''.join(stack[:-k] if k else stack).lstrip('0')
    return result or '0'
