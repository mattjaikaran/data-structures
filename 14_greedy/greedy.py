"""
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GREEDY  ·  Python
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Greedy: make the locally optimal choice at each step.
Provable correct when: greedy choice + optimal substructure.
vs DP: DP tries ALL choices; greedy commits to one.
Proof technique: exchange argument — show any other choice
is no better (swap it for greedy choice, result doesn't worsen).
"""
import heapq
from collections import Counter


# ━━ INTERVALS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def meeting_rooms(intervals: list[list[int]]) -> bool:
    """🟡 Meeting Rooms (LC #252) — can a person attend all?"""
    intervals.sort()
    for i in range(1, len(intervals)):
        if intervals[i][0] < intervals[i-1][1]: return False
    return True

def meeting_rooms_ii(intervals: list[list[int]]) -> int:
    """🟡 Meeting Rooms II (LC #253) — min rooms needed"""
    # Greedy: always assign to room that ends earliest (min-heap)
    intervals.sort()
    heap = []  # end times
    for start, end in intervals:
        if heap and heap[0] <= start:
            heapq.heapreplace(heap, end)
        else:
            heapq.heappush(heap, end)
    return len(heap)

def erase_overlap_intervals(intervals: list[list[int]]) -> int:
    """🟡 Non-overlapping Intervals (LC #435) — min to remove"""
    # Greedy: sort by end, keep interval with earliest end (most room for future)
    intervals.sort(key=lambda x: x[1])
    keep = 0; last_end = float('-inf')
    for start, end in intervals:
        if start >= last_end: keep += 1; last_end = end
    return len(intervals) - keep

def min_arrows_burst_balloons(points: list[list[int]]) -> int:
    """🟡 Minimum Number of Arrows (LC #452)"""
    points.sort(key=lambda x: x[1])
    arrows = 0; pos = float('-inf')
    for start, end in points:
        if start > pos: arrows += 1; pos = end
    return arrows

def insert_interval(intervals: list[list[int]], new: list[int]) -> list[list[int]]:
    """🟡 Insert Interval (LC #57)"""
    result = []; i = 0; n = len(intervals)
    while i < n and intervals[i][1] < new[0]:
        result.append(intervals[i]); i += 1
    while i < n and intervals[i][0] <= new[1]:
        new[0] = min(new[0], intervals[i][0])
        new[1] = max(new[1], intervals[i][1]); i += 1
    result.append(new)
    while i < n: result.append(intervals[i]); i += 1
    return result

def partition_labels(s: str) -> list[int]:
    """🟡 Partition Labels (LC #763) — partition so each char in one part"""
    last = {c: i for i, c in enumerate(s)}
    result = []; start = end = 0
    for i, c in enumerate(s):
        end = max(end, last[c])
        if i == end: result.append(end - start + 1); start = i + 1
    return result


# ━━ SCHEDULING / ALLOCATION ━━━━━━━━━━━━━━━━━━━━━━━

def can_complete_circuit(gas: list[int], cost: list[int]) -> int:
    """🟡 Gas Station (LC #134) — circular route"""
    # If total gas >= total cost, a solution exists.
    # The starting point is after the last deficit.
    if sum(gas) < sum(cost): return -1
    tank = start = 0
    for i in range(len(gas)):
        tank += gas[i] - cost[i]
        if tank < 0: start = i + 1; tank = 0
    return start

def candy(ratings: list[int]) -> int:
    """🔴 Candy (LC #135) — min candies: higher rating → more than neighbors"""
    n = len(ratings)
    candies = [1] * n
    for i in range(1, n):
        if ratings[i] > ratings[i-1]: candies[i] = candies[i-1] + 1
    for i in range(n-2, -1, -1):
        if ratings[i] > ratings[i+1]: candies[i] = max(candies[i], candies[i+1]+1)
    return sum(candies)

def largest_number(nums: list[int]) -> str:
    """🟡 Largest Number (LC #179) — arrange to form largest number"""
    import functools
    def cmp(a, b):
        return -1 if a+b > b+a else (1 if a+b < b+a else 0)
    strs = sorted([str(n) for n in nums], key=functools.cmp_to_key(cmp))
    result = ''.join(strs)
    return '0' if result[0] == '0' else result

def assign_cookies(greed: list[int], sizes: list[int]) -> int:
    """🟢 Assign Cookies (LC #455) — max content children"""
    greed.sort(); sizes.sort()
    child = cookie = 0
    while child < len(greed) and cookie < len(sizes):
        if sizes[cookie] >= greed[child]: child += 1
        cookie += 1
    return child

def lemonade_change(bills: list[int]) -> bool:
    """🟢 Lemonade Change (LC #860)"""
    five = ten = 0
    for b in bills:
        if b == 5: five += 1
        elif b == 10:
            if not five: return False
            five -= 1; ten += 1
        else:  # 20
            if ten and five: ten -= 1; five -= 1
            elif five >= 3: five -= 3
            else: return False
    return True

def broken_calculator(start: int, target: int) -> int:
    """🟡 Broken Calculator (LC #991) — min ops: double or decrement"""
    # Work backwards from target: if even halve, if odd add 1
    ops = 0
    while target > start:
        if target % 2: target += 1
        else: target //= 2
        ops += 1
    return ops + (start - target)


# ━━ GREEDY + HEAP ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def find_min_cost_connect_sticks(sticks: list[int]) -> int:
    """🟡 Minimum Cost to Connect Sticks (LC #1167)"""
    heapq.heapify(sticks)
    cost = 0
    while len(sticks) > 1:
        a, b = heapq.heappop(sticks), heapq.heappop(sticks)
        cost += a + b; heapq.heappush(sticks, a + b)
    return cost

def ipo(k: int, w: int, profits: list[int], capital: list[int]) -> int:
    """🔴 IPO (LC #502) — max capital doing at most k projects"""
    available = []
    projects = sorted(zip(capital, profits))
    i = 0
    for _ in range(k):
        while i < len(projects) and projects[i][0] <= w:
            heapq.heappush(available, -projects[i][1]); i += 1
        if not available: break
        w += -heapq.heappop(available)
    return w

def rearrange_string_k_apart(s: str, k: int) -> str:
    """🔴 Rearrange String k Distance Apart — greedy + max heap"""
    if k == 0: return s
    count = Counter(s)
    heap = [(-v, c) for c, v in count.items()]
    heapq.heapify(heap)
    result = []; wait = []
    while heap:
        v, c = heapq.heappop(heap)
        result.append(c)
        wait.append((v+1, c))  # v+1 because v is negative
        if len(wait) >= k:
            wv, wc = wait.pop(0)
            if wv < 0: heapq.heappush(heap, (wv, wc))
    return ''.join(result) if len(result) == len(s) else ""


# ━━ TWO / MULTI POINTER GREEDY ━━━━━━━━━━━━━━━━━━━━

def boats_to_save_people(people: list[int], limit: int) -> int:
    """🟡 Boats to Save People (LC #881) — at most 2 per boat"""
    people.sort()
    l, r = 0, len(people) - 1; boats = 0
    while l <= r:
        if people[l] + people[r] <= limit: l += 1
        r -= 1; boats += 1
    return boats

def two_city_scheduling(costs: list[list[int]]) -> int:
    """🟡 Two City Scheduling (LC #1029)"""
    # Sort by (cost_A - cost_B): send cheapest half to A, rest to B
    costs.sort(key=lambda x: x[0] - x[1])
    n = len(costs) // 2
    return sum(c[0] for c in costs[:n]) + sum(c[1] for c in costs[n:])

def wiggle_subsequence(nums: list[int]) -> int:
    """🟡 Wiggle Subsequence (LC #376)"""
    up = down = 1
    for i in range(1, len(nums)):
        if nums[i] > nums[i-1]: up = down + 1
        elif nums[i] < nums[i-1]: down = up + 1
    return max(up, down)


# ━━ Tests ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def run_tests():
    print("Running greedy tests...\n")

    assert meeting_rooms([[0,30],[5,10],[15,20]]) == False
    assert meeting_rooms([[7,10],[2,4]]) == True
    print("  ✅ meeting_rooms")

    assert meeting_rooms_ii([[0,30],[5,10],[15,20]]) == 2
    assert meeting_rooms_ii([[7,10],[2,4]]) == 1
    print("  ✅ meeting_rooms_ii")

    assert erase_overlap_intervals([[1,2],[2,3],[3,4],[1,3]]) == 1
    assert erase_overlap_intervals([[1,2],[1,2],[1,2]]) == 2
    print("  ✅ erase_overlap_intervals")

    assert min_arrows_burst_balloons([[10,16],[2,8],[1,6],[7,12]]) == 2
    print("  ✅ min_arrows_burst_balloons")

    assert insert_interval([[1,3],[6,9]], [2,5]) == [[1,5],[6,9]]
    assert insert_interval([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]) == [[1,2],[3,10],[12,16]]
    print("  ✅ insert_interval")

    assert partition_labels("ababcbacadefegdehijhklij") == [9,7,8]
    print("  ✅ partition_labels")

    assert can_complete_circuit([1,2,3,4,5],[3,4,5,1,2]) == 3
    assert can_complete_circuit([2,3,4],[3,4,3]) == -1
    print("  ✅ can_complete_circuit")

    assert candy([1,0,2]) == 5
    assert candy([1,2,2]) == 4
    print("  ✅ candy")

    assert largest_number([10,2]) == "210"
    assert largest_number([3,30,34,5,9]) == "9534330"
    print("  ✅ largest_number")

    assert assign_cookies([1,2,3],[1,1]) == 1
    assert assign_cookies([1,2],[1,2,3]) == 2
    print("  ✅ assign_cookies")

    assert lemonade_change([5,5,5,10,20]) == True
    assert lemonade_change([5,5,10,10,20]) == False
    print("  ✅ lemonade_change")

    assert find_min_cost_connect_sticks([2,4,3]) == 14
    assert find_min_cost_connect_sticks([1,8,3,5]) == 30
    print("  ✅ find_min_cost_connect_sticks")

    assert ipo(2, 0, [1,2,3], [0,1,1]) == 4
    print("  ✅ ipo")

    assert boats_to_save_people([1,2],3) == 1
    assert boats_to_save_people([3,2,2,1],3) == 3
    print("  ✅ boats_to_save_people")

    assert two_city_scheduling([[10,20],[30,200],[400,50],[30,20]]) == 110
    print("  ✅ two_city_scheduling")

    assert wiggle_subsequence([1,7,4,9,2,5]) == 6
    assert wiggle_subsequence([1,2,3,4,5,6,7,8,9]) == 2
    print("  ✅ wiggle_subsequence")

    assert broken_calculator(2, 3) == 2
    assert broken_calculator(5, 8) == 2
    print("  ✅ broken_calculator")

    print("\n🎉 All greedy tests passed!")

if __name__ == "__main__":
    run_tests()
