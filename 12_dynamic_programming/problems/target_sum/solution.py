
def target_sum(nums: list[int], target: int) -> int:
    """🟡 Target Sum (LC #494)
    Assign + or - to each number. Count ways to reach target.
    """
    dp = {0: 1}
    for n in nums:
        ndp = {}
        for s, cnt in dp.items():
            ndp[s+n] = ndp.get(s+n, 0) + cnt
            ndp[s-n] = ndp.get(s-n, 0) + cnt
        dp = ndp
    return dp.get(target, 0)
