

def combination_sum_ii(candidates: list[int], target: int) -> list[list[int]]:
    """🟡 Combination Sum II (LC #40) — no reuse, may have duplicates"""
    candidates.sort()
    result = []
    def bt(start, path, remaining):
        if remaining == 0: result.append(path[:]); return
        for i in range(start, len(candidates)):
            if candidates[i] > remaining: break
            if i > start and candidates[i] == candidates[i-1]: continue  # skip dup
            path.append(candidates[i])
            bt(i + 1, path, remaining - candidates[i])
            path.pop()
    bt(0, [], target)
    return result
