
def subarray_sum_equals_k(nums: list[int], k: int) -> int:
    """🟡 Subarray Sum Equals K (LC #560)"""
    count=prefix=0; freq={0:1}
    for n in nums:
        prefix+=n; count+=freq.get(prefix-k,0); freq[prefix]=freq.get(prefix,0)+1
    return count
