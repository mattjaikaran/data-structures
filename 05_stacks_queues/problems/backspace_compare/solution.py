
def backspace_compare(s: str, t: str) -> bool:
    """🟢 Backspace String Compare (LC #844). '#' = backspace. O(n)."""
    def process(string: str) -> str:
        stack: list[str] = []
        for ch in string:
            if ch != '#': stack.append(ch)
            elif stack: stack.pop()
        return ''.join(stack)
    return process(s) == process(t)
