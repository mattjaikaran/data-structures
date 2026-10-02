
def next_greater_element(nums1: list[int], nums2: list[int]) -> list[int]:
    """🟡 Next Greater Element I (LC #496) — monotonic stack + hash map. O(n)."""
    nge: dict[int, int] = {}
    stack: list[int] = []
    for n in nums2:
        while stack and n > stack[-1]:
            nge[stack.pop()] = n
        stack.append(n)
    for n in stack:
        nge[n] = -1
    return [nge[n] for n in nums1]
