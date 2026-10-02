
def partition_equal_subset(nums: list[int]) -> bool:
    """🟡 Partition Equal Subset Sum (LC #416) — 0/1 knapsack
    Can we split nums into two subsets with equal sum?
    """
    total = sum(nums)
    if total % 2: return False
    target = total // 2
    dp = {0}
    for n in nums:
        dp = dp | {s+n for s in dp}
        if target in dp: return True
    return target in dp
