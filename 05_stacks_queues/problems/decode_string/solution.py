
def decode_string(s: str) -> str:
    """🟡 Decode String (LC #394). '3[a2[c]]' → 'accaccacc'. O(n)."""
    count_stack: list[int] = []
    str_stack: list[str] = []
    cur, k = '', 0
    for ch in s:
        if ch.isdigit():
            k = k * 10 + int(ch)
        elif ch == '[':
            count_stack.append(k); str_stack.append(cur); cur = ''; k = 0
        elif ch == ']':
            cur = str_stack.pop() + cur * count_stack.pop()
        else:
            cur += ch
    return cur
