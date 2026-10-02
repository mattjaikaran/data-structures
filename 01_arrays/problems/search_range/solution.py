def search_range(nums: list[int], target: int) -> list[int]:
    def bound(upper: bool) -> int:
        lo, hi = 0, len(nums)
        while lo < hi:
            mid = lo + (hi - lo) // 2
            if nums[mid] < target or (upper and nums[mid] == target):
                lo = mid + 1
            else:
                hi = mid
        return lo
    first = bound(False)
    return [-1, -1] if first == len(nums) or nums[first] != target else [first, bound(True) - 1]
