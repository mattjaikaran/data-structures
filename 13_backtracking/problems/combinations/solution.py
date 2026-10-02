

def combinations(n: int, k: int) -> list[list[int]]:
    """🟡 Combinations (LC #77) — choose k from 1..n"""
    result = []
    def bt(start, path):
        if len(path) == k: result.append(path[:]); return
        for i in range(start, n + 1):
            # pruning: not enough numbers left
            if n - i + 1 < k - len(path): break
            path.append(i)
            bt(i + 1, path)
            path.pop()
    bt(1, [])
    return result
