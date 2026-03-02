"""
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HEAPS  ·  Python
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Min-Heap: parent ≤ children. Root = minimum.
Python's heapq is a min-heap. For max-heap: negate values.
Push/pop: O(log n). Peek min: O(1). Build from list: O(n).
Use for: top-K, kth largest, median stream, task scheduling.
"""

# ┌─────────────────────────────────────────────────────────────────┐
# │ TABLE OF CONTENTS                                               │
# ├─────────────────────────────────────────────────────────────────┤
# │ 1. MinHeap class                                                │
# │ 2. MaxHeap class                                                │
# │ 3. Problems                                                    │
# │    - kth_largest               (LC #215)  🟡                   │
# │    - top_k_frequent            (LC #347)  🟡                   │
# │    - find_kth_largest_stream   (LC #703)  🟡                   │
# │    - merge_k_sorted            (LC #23)   🔴                   │
# │    - MedianFinder              (LC #295)  🔴                   │
# │    - task_scheduler            (LC #621)  🟡                   │
# │    - k_closest_points          (LC #973)  🟡                   │
# │    - ugly_number               (LC #264)  🟡                   │
# │    - reorganize_string         (LC #767)  🟡                   │
# │ 4. Tests                                                       │
# └─────────────────────────────────────────────────────────────────┘

import heapq
from collections import Counter


class MinHeap:
    def __init__(self): self._h = []
    def push(self, v): heapq.heappush(self._h, v)
    def pop(self): return heapq.heappop(self._h)
    def peek(self): return self._h[0]
    def __len__(self): return len(self._h)

class MaxHeap:
    def __init__(self): self._h = []
    def push(self, v): heapq.heappush(self._h, -v)
    def pop(self): return -heapq.heappop(self._h)
    def peek(self): return -self._h[0]
    def __len__(self): return len(self._h)


# ══════════════════════════════════════
# PROBLEMS
# ══════════════════════════════════════

def kth_largest(nums: list[int], k: int) -> int:
    """🟡 Kth Largest Element (LC #215) — min-heap of size k"""
    h = []
    for n in nums:
        heapq.heappush(h, n)
        if len(h) > k: heapq.heappop(h)
    return h[0]

def top_k_frequent(nums: list[int], k: int) -> list[int]:
    """🟡 Top K Frequent Elements (LC #347)"""
    return [x for x,_ in Counter(nums).most_common(k)]

def find_kth_largest_stream(stream: list[int], k: int) -> list[int]:
    """🟡 Kth Largest in Stream (LC #703) — running kth largest after each add"""
    h = []; res = []
    for n in stream:
        heapq.heappush(h, n)
        if len(h) > k: heapq.heappop(h)
        res.append(h[0] if len(h)==k else -1)
    return res

def merge_k_sorted(lists: list[list[int]]) -> list[int]:
    """🔴 Merge K Sorted Lists — O(n log k)"""
    h = []; result = []
    for i,lst in enumerate(lists):
        if lst: heapq.heappush(h,(lst[0],i,0))
    while h:
        val,i,j = heapq.heappop(h); result.append(val)
        if j+1 < len(lists[i]): heapq.heappush(h,(lists[i][j+1],i,j+1))
    return result

class MedianFinder:
    """🔴 Find Median from Data Stream (LC #295)
    Two heaps: max-heap for lower half, min-heap for upper half.
    Invariant: len(lo) == len(hi) or len(lo) == len(hi)+1
    """
    def __init__(self): self.lo, self.hi = [], []  # lo=max-heap(neg), hi=min-heap
    def add_num(self, n):
        heapq.heappush(self.lo, -n)
        heapq.heappush(self.hi, -heapq.heappop(self.lo))
        if len(self.hi) > len(self.lo): heapq.heappush(self.lo, -heapq.heappop(self.hi))
    def find_median(self):
        if len(self.lo) > len(self.hi): return float(-self.lo[0])
        return (-self.lo[0] + self.hi[0]) / 2.0

def task_scheduler(tasks: list[str], n: int) -> int:
    """🟡 Task Scheduler (LC #621)"""
    counts = list(Counter(tasks).values())
    max_count = max(counts)
    max_count_tasks = counts.count(max_count)
    return max(len(tasks), (max_count-1)*(n+1) + max_count_tasks)

def k_closest_points(points: list[list[int]], k: int) -> list[list[int]]:
    """🟡 K Closest Points to Origin (LC #973)"""
    return heapq.nsmallest(k, points, key=lambda p: p[0]**2 + p[1]**2)

def ugly_number(n: int) -> int:
    """🟡 Ugly Number II (LC #264) — min-heap approach"""
    h = [1]; seen = {1}
    val = 1
    for _ in range(n):
        val = heapq.heappop(h)
        for factor in [2,3,5]:
            nxt = val*factor
            if nxt not in seen: seen.add(nxt); heapq.heappush(h,nxt)
    return val

def reorganize_string(s: str) -> str:
    """🟡 Reorganize String (LC #767) — greedy with max-heap"""
    counts = [(-v,c) for c,v in Counter(s).items()]
    heapq.heapify(counts)
    result = []
    while len(counts) >= 2:
        c1,l1 = heapq.heappop(counts)
        c2,l2 = heapq.heappop(counts)
        result.extend([l1,l2])
        if c1+1 < 0: heapq.heappush(counts,(c1+1,l1))
        if c2+1 < 0: heapq.heappush(counts,(c2+1,l2))
    if counts:
        if counts[0][0] < -1: return ""
        result.append(counts[0][1])
    return "".join(result)

# ══════════════════════════════════════
# TESTS
# ══════════════════════════════════════

def run_tests():
    print("Running heap tests...\n")

    mnh = MinHeap()
    for v in [5,2,8,1,9]: mnh.push(v)
    assert mnh.peek()==1; assert mnh.pop()==1; assert mnh.peek()==2
    print("  ✅ MinHeap: push / pop / peek")

    mxh = MaxHeap()
    for v in [5,2,8,1,9]: mxh.push(v)
    assert mxh.peek()==9; assert mxh.pop()==9; assert mxh.peek()==8
    print("  ✅ MaxHeap: push / pop / peek")

    assert kth_largest([3,2,1,5,6,4],2)==5
    assert kth_largest([3,2,3,1,2,4,5,5,6],4)==4
    print("  ✅ kth_largest: basic / duplicates")

    assert set(top_k_frequent([1,1,1,2,2,3],2))=={1,2}
    print("  ✅ top_k_frequent")

    assert merge_k_sorted([[1,4,5],[1,3,4],[2,6]])==[1,1,2,3,4,4,5,6]
    print("  ✅ merge_k_sorted")

    mf = MedianFinder()
    for n in [1,2,3]: mf.add_num(n)
    assert mf.find_median()==2.0
    mf.add_num(4)
    assert mf.find_median()==2.5
    print("  ✅ MedianFinder: odd / even count")

    assert task_scheduler(list("AAAAABCD"),2)==13   # A _ _ A _ _ A _ _ A _ _ A B C D
    assert task_scheduler(list("AAABBB"),2)==8      # AB_ AB_ AB
    print("  ✅ task_scheduler")

    pts = [[1,3],[-2,2],[3,4],[-1,-1]]
    closest = k_closest_points(pts,2)
    assert len(closest)==2 and [-2,2] in closest and [-1,-1] in closest
    print("  ✅ k_closest_points")

    assert ugly_number(10)==12
    print("  ✅ ugly_number")

    rs = reorganize_string("aab")
    assert len(rs)==3 and rs[0]!=rs[1] and rs[1]!=rs[2]
    assert reorganize_string("aaab")==""
    print("  ✅ reorganize_string: valid / impossible")

    print("\n🎉 All heap tests passed!")

if __name__ == "__main__":
    run_tests()
