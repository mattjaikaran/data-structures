
def quickselect(nums: list[int], k: int) -> int:
    """🟡 Find kth smallest element in O(n) avg via quickselect.
    Same partition logic as quicksort but only recurse into relevant half.
    """
    def select(lo, hi, k):
        if lo == hi: return nums[lo]
        pivot_idx = partition(lo, hi)
        if k == pivot_idx: return nums[k]
        elif k < pivot_idx: return select(lo, pivot_idx-1, k)
        else: return select(pivot_idx+1, hi, k)

    def partition(lo, hi):
        pivot = nums[hi]; i = lo
        for j in range(lo, hi):
            if nums[j] <= pivot: nums[i], nums[j] = nums[j], nums[i]; i += 1
        nums[i], nums[hi] = nums[hi], nums[i]
        return i

    nums = nums[:]
    return select(0, len(nums)-1, k-1)  # k is 1-indexed
