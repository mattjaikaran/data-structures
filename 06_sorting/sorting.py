"""
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SORTING  ·  Python
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ALGORITHM       TIME AVG     TIME WORST   SPACE   STABLE
Bubble Sort     O(n²)        O(n²)        O(1)    ✅
Selection Sort  O(n²)        O(n²)        O(1)    ❌
Insertion Sort  O(n²)        O(n²)        O(1)    ✅  ← best for nearly-sorted
Merge Sort      O(n log n)   O(n log n)   O(n)    ✅  ← best for linked lists
Quick Sort      O(n log n)   O(n²)        O(logn) ❌  ← best avg, in-place
Heap Sort       O(n log n)   O(n log n)   O(1)    ❌
Counting Sort   O(n+k)       O(n+k)       O(k)    ✅  ← integers in range [0,k]
Radix Sort      O(d*(n+k))   O(d*(n+k))   O(n+k)  ✅  ← integers, strings
Tim Sort        O(n log n)   O(n log n)   O(n)    ✅  ← Python's built-in

KEY INSIGHT: No comparison sort can beat O(n log n). Counting/Radix
bypass this by exploiting structure in the data (not comparisons).
"""
import random


def bubble_sort(arr: list) -> list:
    """O(n²) — repeatedly swap adjacent out-of-order elements."""
    a = arr[:]
    n = len(a)
    for i in range(n):
        swapped = False
        for j in range(n-1-i):
            if a[j] > a[j+1]:
                a[j], a[j+1] = a[j+1], a[j]
                swapped = True
        if not swapped: break  # already sorted — early exit
    return a


def selection_sort(arr: list) -> list:
    """O(n²) — find minimum in unsorted portion, place at front."""
    a = arr[:]
    for i in range(len(a)):
        min_idx = min(range(i, len(a)), key=lambda j: a[j])
        a[i], a[min_idx] = a[min_idx], a[i]
    return a


def insertion_sort(arr: list) -> list:
    """O(n²) worst, O(n) best — great for nearly-sorted arrays."""
    a = arr[:]
    for i in range(1, len(a)):
        key = a[i]; j = i - 1
        while j >= 0 and a[j] > key:
            a[j+1] = a[j]; j -= 1
        a[j+1] = key
    return a


def merge_sort(arr: list) -> list:
    """O(n log n) — divide and conquer. Stable, great for linked lists."""
    if len(arr) <= 1: return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)


def merge(left: list, right: list) -> list:
    result = []; i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]: result.append(left[i]); i += 1
        else: result.append(right[j]); j += 1
    return result + left[i:] + right[j:]


def quick_sort(arr: list) -> list:
    """O(n log n) avg, O(n²) worst — random pivot avoids worst case."""
    if len(arr) <= 1: return arr
    pivot = random.choice(arr)
    left  = [x for x in arr if x < pivot]
    mid   = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + mid + quick_sort(right)


def quick_sort_inplace(arr: list, lo: int = 0, hi: int = None) -> list:
    """In-place quicksort with Lomuto partition scheme."""
    if hi is None: arr = arr[:]; hi = len(arr) - 1

    def partition(lo, hi):
        pivot = arr[hi]; i = lo - 1
        for j in range(lo, hi):
            if arr[j] <= pivot:
                i += 1; arr[i], arr[j] = arr[j], arr[i]
        arr[i+1], arr[hi] = arr[hi], arr[i+1]
        return i + 1

    def _qs(lo, hi):
        if lo < hi:
            p = partition(lo, hi)
            _qs(lo, p-1); _qs(p+1, hi)

    _qs(lo, hi); return arr


def heap_sort(arr: list) -> list:
    """O(n log n) — build max-heap, extract max n times."""
    a = arr[:]
    n = len(a)

    def heapify(n, i):
        largest = i; l = 2*i+1; r = 2*i+2
        if l < n and a[l] > a[largest]: largest = l
        if r < n and a[r] > a[largest]: largest = r
        if largest != i:
            a[i], a[largest] = a[largest], a[i]
            heapify(n, largest)

    for i in range(n//2-1, -1, -1): heapify(n, i)
    for i in range(n-1, 0, -1):
        a[0], a[i] = a[i], a[0]
        heapify(i, 0)
    return a


def counting_sort(arr: list[int], max_val: int = None) -> list[int]:
    """O(n+k) — only works for non-negative integers in a known range."""
    if not arr: return []
    k = (max_val or max(arr)) + 1
    counts = [0] * k
    for n in arr: counts[n] += 1
    result = []
    for val, cnt in enumerate(counts): result.extend([val] * cnt)
    return result


def radix_sort(arr: list[int]) -> list[int]:
    """O(d*(n+10)) — sort by each digit, least significant first."""
    if not arr: return []
    max_val = max(arr); exp = 1
    a = arr[:]
    while max_val // exp > 0:
        buckets = [[] for _ in range(10)]
        for n in a: buckets[(n // exp) % 10].append(n)
        a = [n for bucket in buckets for n in bucket]
        exp *= 10
    return a


def quickselect(nums: list[int], k: int) -> int:
    """Find kth smallest element in O(n) avg via quickselect.
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


def dutch_national_flag(nums: list[int]) -> list[int]:
    """Sort array of 0s, 1s, 2s in O(n) with O(1) space.
    Three-way partition (also the core of 3-way quicksort).
    """
    lo = mid = 0; hi = len(nums) - 1
    nums = nums[:]
    while mid <= hi:
        if nums[mid] == 0: nums[lo], nums[mid] = nums[mid], nums[lo]; lo += 1; mid += 1
        elif nums[mid] == 1: mid += 1
        else: nums[mid], nums[hi] = nums[hi], nums[mid]; hi -= 1
    return nums


def merge_intervals_sorted(intervals: list[list[int]]) -> list[list[int]]:
    """Merge overlapping intervals. Sort first, then linear scan."""
    if not intervals: return []
    intervals = sorted(intervals, key=lambda x: x[0])
    merged = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= merged[-1][1]: merged[-1][1] = max(merged[-1][1], end)
        else: merged.append([start, end])
    return merged


def sort_nearly_sorted(arr: list[int], k: int) -> list[int]:
    """Sort a k-sorted array (each element at most k positions from sorted pos).
    Use min-heap of size k+1. O(n log k).
    """
    import heapq
    heap = arr[:k+1]; heapq.heapify(heap)
    result = []
    for i in range(k+1, len(arr)):
        result.append(heapq.heappushpop(heap, arr[i]))
    while heap: result.append(heapq.heappop(heap))
    return result


# ── Tests ─────────────────────────────────────
def run_tests():
    print("Running sorting tests...\n")

    test_cases = [
        [64,34,25,12,22,11,90],
        [5,4,3,2,1],
        [1,2,3,4,5],
        [3],
        [],
        [1,1,1,1],
        [-3,1,-1,0,2],
    ]
    expected = [sorted(t) for t in test_cases]

    for sort_fn in [bubble_sort, selection_sort, insertion_sort, merge_sort, quick_sort, heap_sort]:
        for tc, exp in zip(test_cases, expected):
            assert sort_fn(tc) == exp, f"{sort_fn.__name__} failed on {tc}"
        print(f"  ✅ {sort_fn.__name__}")

    # Counting sort (non-negative ints only)
    assert counting_sort([4,2,2,8,3,3,1]) == [1,2,2,3,3,4,8]
    assert counting_sort([]) == []
    print("  ✅ counting_sort")

    # Radix sort
    assert radix_sort([170,45,75,90,802,24,2,66]) == [2,24,45,66,75,90,170,802]
    assert radix_sort([]) == []
    print("  ✅ radix_sort")

    # Quickselect
    assert quickselect([3,2,1,5,6,4], 2) == 2
    assert quickselect([3,2,3,1,2,4,5,5,6], 4) == 3
    print("  ✅ quickselect: kth smallest")

    # Dutch National Flag
    assert dutch_national_flag([2,0,2,1,1,0]) == [0,0,1,1,2,2]
    assert dutch_national_flag([0]) == [0]
    print("  ✅ dutch_national_flag")

    # Merge intervals
    assert merge_intervals_sorted([[1,3],[2,6],[8,10],[15,18]]) == [[1,6],[8,10],[15,18]]
    assert merge_intervals_sorted([[1,4],[4,5]]) == [[1,5]]
    print("  ✅ merge_intervals_sorted")

    # K-sorted
    assert sort_nearly_sorted([2,1,4,3,6,5,8,7], 1) == [1,2,3,4,5,6,7,8]
    assert sort_nearly_sorted([6,5,3,2,8,10,9], 3) == [2,3,5,6,8,9,10]
    print("  ✅ sort_nearly_sorted (k-sorted heap)")

    print("\n🎉 All sorting tests passed!")


if __name__ == "__main__":
    run_tests()
