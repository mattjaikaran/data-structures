
def longest_increasing_subsequence(nums: list[int]) -> int:
    """🟡 Longest Increasing Subsequence (LC #300)
    O(n log n) using patience sorting / binary search.
    tails[i] = smallest tail of all LIS of length i+1
    """
    import bisect
    tails = []
    for n in nums:
        pos = bisect.bisect_left(tails, n)
        if pos == len(tails): tails.append(n)
        else: tails[pos] = n
    return len(tails)
