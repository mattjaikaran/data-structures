

def combination_sum(candidates: list[int], target: int) -> list[list[int]]:
    """🟡 Combination Sum (LC #39) — reuse allowed, distinct candidates"""
    result = []
    candidates.sort()
    def bt(start, path, remaining):
        if remaining == 0: result.append(path[:]); return
        for i in range(start, len(candidates)):
            if candidates[i] > remaining: break  # pruning (sorted)
            path.append(candidates[i])
            bt(i, path, remaining - candidates[i])  # i not i+1 = reuse allowed
            path.pop()
    bt(0, [], target)
    return result
