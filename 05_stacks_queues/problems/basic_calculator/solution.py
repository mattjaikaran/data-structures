
def basic_calculator(s: str) -> int:
    """🔴 Basic Calculator (LC #224) — stack for nested parens. O(n)."""
    stack: list[int] = []
    result = sign = 0
    sign = 1
    i = 0
    while i < len(s):
        ch = s[i]
        if ch.isdigit():
            num = 0
            while i < len(s) and s[i].isdigit():
                num = num * 10 + int(s[i]); i += 1
            result += sign * num; continue
        elif ch == '+': sign = 1
        elif ch == '-': sign = -1
        elif ch == '(': stack.append(result); stack.append(sign); result = 0; sign = 1
        elif ch == ')': result = stack.pop() * result + stack.pop()
        i += 1
    return result
