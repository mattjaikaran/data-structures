"""
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARRAYS  ·  Python
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHAT IS AN ARRAY?
  A contiguous block of memory storing elements in order.
  Python's `list` is a *dynamic array* — it resizes automatically.

INTERNAL MECHANICS
  - Backed by a C array of pointers to Python objects
  - When full: allocates ~2x capacity, copies all elements → O(n) once
  - Amortized cost of append: O(1)

COMPLEXITY SUMMARY
  ┌─────────────────────┬──────────────┬──────────────┐
  │ Operation           │ Average      │ Worst        │
  ├─────────────────────┼──────────────┼──────────────┤
  │ Access  arr[i]      │ O(1)         │ O(1)         │
  │ Search (unsorted)   │ O(n)         │ O(n)         │
  │ Search (sorted)     │ O(log n)     │ O(log n)     │
  │ Insert at end       │ O(1) amort.  │ O(n) resize  │
  │ Insert at middle    │ O(n)         │ O(n)         │
  │ Delete at end       │ O(1)         │ O(1)         │
  │ Delete at middle    │ O(n)         │ O(n)         │
  └─────────────────────┴──────────────┴──────────────┘

CORE PATTERNS
  • Two Pointers     — shrink window from both ends
  • Sliding Window   — move a fixed/variable window forward
  • Prefix Sum       — precompute cumulative sums for range queries
  • Kadane's         — optimal subarray tracking running max
  • Binary Search    — O(log n) search on sorted data
"""

# ┌─────────────────────────────────────────────┐
# │ TABLE OF CONTENTS                           │
# ├─────────────────────────────────────────────┤
# │ 1. DynamicArray class                       │
# │ 2. Core Algorithms                          │
# │    - binary_search                          │
# │    - prefix_sum                             │
# │    - max_subarray_kadane                    │
# │    - sliding_window_max_sum                 │
# │    - two_pointer_sorted_pair                │
# │    - rotate_right                           │
# │ 3. Interview Problems                       │
# │    - two_sum                (LC #1)   🟢    │
# │    - best_time_buy_sell     (LC #121) 🟢    │
# │    - contains_duplicate     (LC #217) 🟢    │
# │    - move_zeroes            (LC #283) 🟢    │
# │    - product_except_self    (LC #238) 🟡    │
# │    - max_subarray           (LC #53)  🟡    │
# │    - three_sum              (LC #15)  🟡    │
# │    - max_product_subarray   (LC #152) 🟡    │
# │    - subarray_sum_k         (LC #560) 🟡    │
# │    - container_most_water   (LC #11)  🟡    │
# │    - search_rotated         (LC #33)  🟡    │
# │    - trap_rain_water        (LC #42)  🔴    │
# │    - largest_rectangle_histogram (LC #84) 🔴│
# │ 4. Tests                                    │
# └─────────────────────────────────────────────┘

from __future__ import annotations
from typing import Optional


# ══════════════════════════════════════════════
# PART 1 — DYNAMIC ARRAY (manual implementation)
# ══════════════════════════════════════════════

class DynamicArray:
    """
    Manual dynamic array to illustrate what Python's list does internally.
    Uses a fixed-size backing array that doubles when capacity is exceeded.
    """

    def __init__(self) -> None:
        self._cap: int = 4
        self._size: int = 0
        self._data: list = [None] * self._cap

    # ── Core API ──────────────────────────────

    def __len__(self) -> int:
        return self._size

    def __getitem__(self, i: int):
        self._check_bounds(i)
        return self._data[i]

    def __setitem__(self, i: int, val) -> None:
        self._check_bounds(i)
        self._data[i] = val

    def __repr__(self) -> str:
        return f"[{', '.join(str(self._data[i]) for i in range(self._size))}]"

    def append(self, val) -> None:
        """O(1) amortized."""
        if self._size == self._cap:
            self._resize(self._cap * 2)
        self._data[self._size] = val
        self._size += 1

    def insert(self, i: int, val) -> None:
        """O(n) — shifts elements right."""
        if not (0 <= i <= self._size):
            raise IndexError(f"Index {i} out of range")
        if self._size == self._cap:
            self._resize(self._cap * 2)
        for j in range(self._size, i, -1):
            self._data[j] = self._data[j - 1]
        self._data[i] = val
        self._size += 1

    def remove(self, i: int):
        """O(n) — shifts elements left."""
        self._check_bounds(i)
        val = self._data[i]
        for j in range(i, self._size - 1):
            self._data[j] = self._data[j + 1]
        self._data[self._size - 1] = None
        self._size -= 1
        if self._size < self._cap // 4 and self._cap > 4:
            self._resize(self._cap // 2)
        return val

    # ── Internals ─────────────────────────────

    def _resize(self, new_cap: int) -> None:
        new_data = [None] * new_cap
        for i in range(self._size):
            new_data[i] = self._data[i]
        self._data = new_data
        self._cap = new_cap

    def _check_bounds(self, i: int) -> None:
        if not (0 <= i < self._size):
            raise IndexError(f"Index {i} out of range (size={self._size})")


# ══════════════════════════════════════════════
# PART 2 — CORE ALGORITHMS
# ══════════════════════════════════════════════

def binary_search(arr: list[int], target: int) -> int:
    """
    Binary Search on a sorted array.
    Returns index of target, or -1 if not found.
    Time: O(log n)  Space: O(1)

    KEY INSIGHT: (left + right) // 2 can overflow in other languages —
    use left + (right - left) // 2 as a habit.
    """
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1


def prefix_sum(nums: list[int]) -> list[int]:
    """
    Build prefix sum array.
    prefix[i] = sum of nums[0..i-1]  (prefix[0] = 0 as sentinel)

    Range sum [l, r] = prefix[r+1] - prefix[l]
    Time: O(n) build, O(1) query  Space: O(n)
    """
    prefix = [0] * (len(nums) + 1)
    for i, n in enumerate(nums):
        prefix[i + 1] = prefix[i] + n
    return prefix


def max_subarray_kadane(nums: list[int]) -> int:
    """
    Kadane's Algorithm — largest contiguous subarray sum.
    Time: O(n)  Space: O(1)

    DECISION at each step: is it better to start fresh or extend?
        current = max(num, current + num)
    """
    best = current = nums[0]
    for num in nums[1:]:
        current = max(num, current + num)
        best = max(best, current)
    return best


def sliding_window_max_sum(nums: list[int], k: int) -> int:
    """
    Maximum sum of any contiguous subarray of size k.
    Time: O(n)  Space: O(1)

    TRICK: instead of re-summing each window, add the new element
    and drop the one that slid out: O(n) not O(n*k).
    """
    window = sum(nums[:k])
    best = window
    for i in range(k, len(nums)):
        window += nums[i] - nums[i - k]
        best = max(best, window)
    return best


def two_pointer_sorted_pair(arr: list[int], target: int) -> Optional[list[int]]:
    """
    Two pointers on a sorted array — find pair summing to target.
    Time: O(n)  Space: O(1)
    """
    left, right = 0, len(arr) - 1
    while left < right:
        s = arr[left] + arr[right]
        if s == target:
            return [left, right]
        elif s < target:
            left += 1
        else:
            right -= 1
    return None


def rotate_right(nums: list[int], k: int) -> None:
    """
    Rotate array right by k steps IN-PLACE.
    Time: O(n)  Space: O(1)

    REVERSAL TRICK:
      [1,2,3,4,5], k=2 → [4,5,1,2,3]
      Step 1: reverse all    → [5,4,3,2,1]
      Step 2: reverse [0:k]  → [4,5,3,2,1]
      Step 3: reverse [k:]   → [4,5,1,2,3]  ✓
    """
    n = len(nums)
    k %= n

    def rev(l: int, r: int) -> None:
        while l < r:
            nums[l], nums[r] = nums[r], nums[l]
            l += 1; r -= 1

    rev(0, n - 1)
    rev(0, k - 1)
    rev(k, n - 1)


# ══════════════════════════════════════════════
# PART 3 — INTERVIEW PROBLEMS
# ══════════════════════════════════════════════

# ── 🟢 Easy ───────────────────────────────────

def two_sum(nums: list[int], target: int) -> list[int]:
    """
    🟢 Two Sum (LC #1)
    Return indices of two numbers that add to target.
    Time: O(n)  Space: O(n)
    Pattern: Hash map — store seen[value] = index
    """
    seen: dict[int, int] = {}
    for i, n in enumerate(nums):
        if (comp := target - n) in seen:
            return [seen[comp], i]
        seen[n] = i
    return []


def best_time_buy_sell(prices: list[int]) -> int:
    """
    🟢 Best Time to Buy and Sell Stock (LC #121)
    One transaction max. Return max profit.
    Time: O(n)  Space: O(1)
    Pattern: Track running minimum, compute max profit at each step.
    """
    min_p, profit = float('inf'), 0
    for p in prices:
        min_p = min(min_p, p)
        profit = max(profit, p - min_p)
    return profit


def contains_duplicate(nums: list[int]) -> bool:
    """
    🟢 Contains Duplicate (LC #217)
    Time: O(n)  Space: O(n)
    """
    return len(nums) != len(set(nums))


def move_zeroes(nums: list[int]) -> None:
    """
    🟢 Move Zeroes (LC #283) — in-place.
    Time: O(n)  Space: O(1)
    Pattern: Two pointers — left = insert slot for non-zeros.
    """
    left = 0
    for right in range(len(nums)):
        if nums[right] != 0:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1


# ── 🟡 Medium ─────────────────────────────────

def product_except_self(nums: list[int]) -> list[int]:
    """
    🟡 Product of Array Except Self (LC #238)
    No division allowed.
    Time: O(n)  Space: O(1) extra (output array doesn't count)

    Pattern: Two-pass prefix/suffix multiplication.
      Pass 1 left→right: result[i] = product of all nums to the LEFT of i
      Pass 2 right→left: multiply result[i] by product of all to the RIGHT
    """
    n = len(nums)
    result = [1] * n
    # Left pass
    prefix = 1
    for i in range(n):
        result[i] = prefix
        prefix *= nums[i]
    # Right pass
    suffix = 1
    for i in range(n - 1, -1, -1):
        result[i] *= suffix
        suffix *= nums[i]
    return result


def max_subarray(nums: list[int]) -> int:
    """
    🟡 Maximum Subarray (LC #53) — Kadane's Algorithm
    Time: O(n)  Space: O(1)
    """
    best = current = nums[0]
    for n in nums[1:]:
        current = max(n, current + n)
        best = max(best, current)
    return best


def three_sum(nums: list[int]) -> list[list[int]]:
    """
    🟡 3Sum (LC #15)
    Find all unique triplets summing to zero.
    Time: O(n²)  Space: O(1)

    Pattern: Sort + two pointers. Skip duplicates to avoid repeat triplets.
    """
    nums.sort()
    result: list[list[int]] = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        l, r = i + 1, len(nums) - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if s == 0:
                result.append([nums[i], nums[l], nums[r]])
                while l < r and nums[l] == nums[l + 1]: l += 1
                while l < r and nums[r] == nums[r - 1]: r -= 1
                l += 1; r -= 1
            elif s < 0:
                l += 1
            else:
                r -= 1
    return result


def max_product_subarray(nums: list[int]) -> int:
    """
    🟡 Maximum Product Subarray (LC #152)
    Time: O(n)  Space: O(1)

    TRICK: Track both min AND max at each step.
    A negative * current_min can flip to the new max.
    """
    best = cur_max = cur_min = nums[0]
    for n in nums[1:]:
        candidates = (n, cur_max * n, cur_min * n)
        cur_max, cur_min = max(candidates), min(candidates)
        best = max(best, cur_max)
    return best


def subarray_sum_k(nums: list[int], k: int) -> int:
    """
    🟡 Subarray Sum Equals K (LC #560)
    Count subarrays summing exactly to k.
    Time: O(n)  Space: O(n)

    Pattern: Prefix sum + hash map.
      If prefix[j] - prefix[i] = k, then subarray [i+1..j] sums to k.
      Count how many previous prefixes equal (current_prefix - k).
    """
    count = prefix = 0
    freq: dict[int, int] = {0: 1}
    for n in nums:
        prefix += n
        count += freq.get(prefix - k, 0)
        freq[prefix] = freq.get(prefix, 0) + 1
    return count


def container_most_water(heights: list[int]) -> int:
    """
    🟡 Container With Most Water (LC #11)
    Time: O(n)  Space: O(1)

    Pattern: Two pointers. Move the SHORTER side inward — moving
    the taller side can only decrease the width without any guarantee
    of increasing height.
    """
    l, r, best = 0, len(heights) - 1, 0
    while l < r:
        best = max(best, min(heights[l], heights[r]) * (r - l))
        if heights[l] < heights[r]:
            l += 1
        else:
            r -= 1
    return best


def search_rotated(nums: list[int], target: int) -> int:
    """
    🟡 Search in Rotated Sorted Array (LC #33)
    Time: O(log n)  Space: O(1)

    KEY INSIGHT: One half is ALWAYS sorted. Check which half,
    then determine if target is within that sorted range.
    """
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target:
            return mid
        if nums[l] <= nums[mid]:        # left half sorted
            if nums[l] <= target < nums[mid]:
                r = mid - 1
            else:
                l = mid + 1
        else:                           # right half sorted
            if nums[mid] < target <= nums[r]:
                l = mid + 1
            else:
                r = mid - 1
    return -1


# ── 🔴 Hard ────────────────────────────────────

def trap_rain_water(height: list[int]) -> int:
    """
    🔴 Trapping Rain Water (LC #42)
    Time: O(n)  Space: O(1)

    At each position, water = min(max_left, max_right) - height[i].
    Two pointer approach: process the shorter side — we know its
    water contribution is bounded by its own max.
    """
    l, r = 0, len(height) - 1
    lmax = rmax = water = 0
    while l < r:
        if height[l] < height[r]:
            if height[l] >= lmax:
                lmax = height[l]
            else:
                water += lmax - height[l]
            l += 1
        else:
            if height[r] >= rmax:
                rmax = height[r]
            else:
                water += rmax - height[r]
            r -= 1
    return water


def largest_rectangle_histogram(heights: list[int]) -> int:
    """
    🔴 Largest Rectangle in Histogram (LC #84)
    Time: O(n)  Space: O(n)

    Pattern: Monotonic increasing stack storing (start_index, height) pairs.
    When a shorter bar arrives, pop taller bars and compute their max width.
    The 'start' tracks how far LEFT the current bar can extend.
    Sentinel 0 at end forces the stack to fully flush.
    """
    stack: list[tuple[int, int]] = []   # (left_boundary, height)
    best = 0
    for i, h in enumerate(heights + [0]):   # sentinel forces final flush
        start = i
        while stack and stack[-1][1] > h:
            left, bar_h = stack.pop()
            best = max(best, bar_h * (i - left))
            start = left   # current bar can extend left to where popped bar started
        stack.append((start, h))
    return best


# ══════════════════════════════════════════════
# PART 4 — TESTS
# ══════════════════════════════════════════════

def run_tests() -> None:
    print("Running array tests...\n")

    # ── DynamicArray ──────────────────────────
    da = DynamicArray()
    for v in range(10):
        da.append(v)
    assert len(da) == 10
    assert da[0] == 0 and da[9] == 9
    da.insert(3, 99)
    assert da[3] == 99 and len(da) == 11
    da.remove(3)
    assert da[3] == 3 and len(da) == 10
    print("  ✅ DynamicArray: append / insert / remove / resize")

    # ── binary_search ─────────────────────────
    arr = [1, 3, 5, 7, 9, 11, 13]
    assert binary_search(arr, 7) == 3
    assert binary_search(arr, 1) == 0
    assert binary_search(arr, 13) == 6
    assert binary_search(arr, 6) == -1
    assert binary_search(arr, 0) == -1
    print("  ✅ binary_search: found / not found / boundaries")

    # ── prefix_sum ────────────────────────────
    p = prefix_sum([1, 2, 3, 4, 5])
    assert p[3 + 1] - p[1] == 9    # sum [1..3] = 2+3+4 = 9
    assert p[5] == 15               # total
    print("  ✅ prefix_sum: range queries")

    # ── kadane ────────────────────────────────
    assert max_subarray_kadane([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6
    assert max_subarray_kadane([-1, -2, -3]) == -1      # all negative
    assert max_subarray_kadane([1]) == 1
    print("  ✅ max_subarray_kadane: mixed / all-negative / single")

    # ── sliding window ────────────────────────
    assert sliding_window_max_sum([2, 1, 5, 1, 3, 2], 3) == 9
    assert sliding_window_max_sum([1, 2], 1) == 2
    print("  ✅ sliding_window_max_sum")

    # ── two_sum ───────────────────────────────
    assert two_sum([2, 7, 11, 15], 9) == [0, 1]
    assert two_sum([3, 2, 4], 6) == [1, 2]
    assert two_sum([3, 3], 6) == [0, 1]
    print("  ✅ two_sum: basic / complement at end / duplicate pair")

    # ── best_time_buy_sell ────────────────────
    assert best_time_buy_sell([7, 1, 5, 3, 6, 4]) == 5
    assert best_time_buy_sell([7, 6, 4, 3, 1]) == 0     # declining prices
    assert best_time_buy_sell([1, 2]) == 1
    print("  ✅ best_time_buy_sell: profit / no profit / two elements")

    # ── product_except_self ───────────────────
    assert product_except_self([1, 2, 3, 4]) == [24, 12, 8, 6]
    assert product_except_self([0, 1]) == [1, 0]
    print("  ✅ product_except_self: standard / with zero")

    # ── three_sum ─────────────────────────────
    result = three_sum([-1, 0, 1, 2, -1, -4])
    assert sorted(map(sorted, result)) == [[-1, -1, 2], [-1, 0, 1]]
    assert three_sum([0, 0, 0]) == [[0, 0, 0]]
    assert three_sum([1, 2, 3]) == []
    print("  ✅ three_sum: standard / all zeros / no triplets")

    # ── max_product_subarray ──────────────────
    assert max_product_subarray([2, 3, -2, 4]) == 6
    assert max_product_subarray([-2, 0, -1]) == 0
    assert max_product_subarray([-2, 3, -4]) == 24
    print("  ✅ max_product_subarray: positive / with zero / two negatives")

    # ── subarray_sum_k ────────────────────────
    assert subarray_sum_k([1, 1, 1], 2) == 2
    assert subarray_sum_k([1, 2, 3], 3) == 2
    assert subarray_sum_k([-1, -1, 1], 0) == 1
    print("  ✅ subarray_sum_k: multiple / overlap / negative nums")

    # ── container_most_water ──────────────────
    assert container_most_water([1, 8, 6, 2, 5, 4, 8, 3, 7]) == 49
    assert container_most_water([1, 1]) == 1
    print("  ✅ container_most_water")

    # ── search_rotated ────────────────────────
    assert search_rotated([4, 5, 6, 7, 0, 1, 2], 0) == 4
    assert search_rotated([4, 5, 6, 7, 0, 1, 2], 3) == -1
    assert search_rotated([1], 0) == -1
    print("  ✅ search_rotated: found / not found / single element")

    # ── trap_rain_water ───────────────────────
    assert trap_rain_water([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) == 6
    assert trap_rain_water([4, 2, 0, 3, 2, 5]) == 9
    assert trap_rain_water([3, 0, 3]) == 3
    print("  ✅ trap_rain_water: classic / valley / symmetric")

    # ── largest_rectangle_histogram ───────────
    assert largest_rectangle_histogram([2, 1, 5, 6, 2, 3]) == 10
    assert largest_rectangle_histogram([2, 4]) == 4
    assert largest_rectangle_histogram([1]) == 1
    print("  ✅ largest_rectangle_histogram")

    # ── move_zeroes ───────────────────────────
    arr = [0, 1, 0, 3, 12]
    move_zeroes(arr)
    assert arr == [1, 3, 12, 0, 0]
    arr2 = [0]
    move_zeroes(arr2)
    assert arr2 == [0]
    print("  ✅ move_zeroes: mixed / single zero")

    # ── rotate_right ──────────────────────────
    arr = [1, 2, 3, 4, 5]
    rotate_right(arr, 2)
    assert arr == [4, 5, 1, 2, 3]
    arr2 = [1, 2, 3]
    rotate_right(arr2, 4)   # k > n
    assert arr2 == [3, 1, 2]
    print("  ✅ rotate_right: standard / k > n")

    print("\n🎉 All array tests passed!")


if __name__ == "__main__":
    run_tests()
