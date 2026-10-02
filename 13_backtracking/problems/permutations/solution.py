

def permutations(nums: list[int]) -> list[list[int]]:
    """🟡 Permutations (LC #46)"""
    result = []
    def bt(path, used):
        if len(path) == len(nums): result.append(path[:]); return
        for i, n in enumerate(nums):
            if used[i]: continue
            used[i] = True
            path.append(n)
            bt(path, used)
            path.pop()
            used[i] = False
    bt([], [False] * len(nums))
    return result
