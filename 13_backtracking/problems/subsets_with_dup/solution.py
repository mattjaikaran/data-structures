

def subsets_with_dup(nums: list[int]) -> list[list[int]]:
    """🟡 Subsets II (LC #90) — input may have duplicates"""
    nums.sort()
    result = []
    def bt(start, path):
        result.append(path[:])
        for i in range(start, len(nums)):
            if i > start and nums[i] == nums[i-1]: continue  # skip dup
            path.append(nums[i])
            bt(i + 1, path)
            path.pop()
    bt(0, [])
    return result
