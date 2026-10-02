

def subsets(nums: list[int]) -> list[list[int]]:
    """🟡 Subsets (LC #78) — power set, no duplicates in input"""
    result = []
    def bt(start, path):
        result.append(path[:])
        for i in range(start, len(nums)):
            path.append(nums[i])
            bt(i + 1, path)
            path.pop()
    bt(0, [])
    return result
