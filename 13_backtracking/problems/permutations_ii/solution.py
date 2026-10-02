

def permutations_ii(nums: list[int]) -> list[list[int]]:
    """🟡 Permutations II (LC #47) — may contain duplicates"""
    nums.sort()
    result = []
    def bt(path, used):
        if len(path) == len(nums): result.append(path[:]); return
        for i in range(len(nums)):
            if used[i]: continue
            # skip duplicate: same value AND previous same value not used
            if i > 0 and nums[i] == nums[i-1] and not used[i-1]: continue
            used[i] = True
            path.append(nums[i])
            bt(path, used)
            path.pop()
            used[i] = False
    bt([], [False] * len(nums))
    return result
