
def generate_parentheses(n: int) -> list[str]:
    """🟡 Generate Parentheses (LC #22) — backtracking."""
    result: list[str] = []
    def bt(cur: str, op: int, cl: int) -> None:
        if len(cur) == 2 * n: result.append(cur); return
        if op < n: bt(cur + '(', op + 1, cl)
        if cl < op: bt(cur + ')', op, cl + 1)
    bt('', 0, 0)
    return result
