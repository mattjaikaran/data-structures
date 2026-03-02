"""
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DYNAMIC PROGRAMMING  ·  Python
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DP = optimal substructure + overlapping subproblems.
At each step you make a choice; the optimal global answer
is built from optimal local answers.

TWO APPROACHES
  Top-down (memoization): recursion + cache. Natural to write.
  Bottom-up (tabulation): iterative, no recursion overhead.
  Same complexity, bottom-up usually faster in practice.

IDENTIFY DP PROBLEMS
  • "minimum/maximum number of X"
  • "how many ways to..."
  • "is it possible to..."
  • "longest/shortest subsequence/substring"

STATE DESIGN (hardest part)
  Ask: what information do I need to make the optimal decision at step i?
  That becomes your state variables.
"""
# ┌─────────────────────────────────────────────────────────────┐
# │ TABLE OF CONTENTS                                           │
# ├─────────────────────────────────────────────────────────────┤
# │ 1. 1D DP — Linear                                           │
# │    - climbing_stairs            (LC #70)   🟢                │
# │    - house_robber               (LC #198)  🟡                │
# │    - house_robber_ii            (LC #213)  🟡                │
# │    - min_cost_climbing_stairs   (LC #746)  🟢                │
# │    - jump_game                  (LC #55)   🟡                │
# │    - jump_game_ii               (LC #45)   🟡                │
# │    - word_break                 (LC #139)  🟡                │
# │    - decode_ways                (LC #91)   🟡                │
# │    - coin_change                (LC #322)  🟡                │
# │    - coin_change_ways           (LC #518)  🟡                │
# │    - longest_increasing_subsequence (LC #300) 🟡             │
# │    - max_product_subarray       (LC #152)  🟡                │
# │ 2. 2D DP — Grid / Two Sequences                             │
# │    - unique_paths               (LC #62)   🟡                │
# │    - min_path_sum               (LC #64)   🟡                │
# │    - longest_common_subsequence (LC #1143) 🟡                │
# │    - edit_distance              (LC #72)   🔴                │
# │    - longest_palindromic_substring (LC #5)  🟡               │
# │    - longest_palindromic_subseq (LC #516)  🟡                │
# │ 3. Knapsack Variants                                         │
# │    - partition_equal_subset    (LC #416)  🟡                │
# │    - ones_and_zeroes            (LC #474)  🔴                │
# │    - target_sum                (LC #494)   🟡                │
# │ 4. DP on Strings                                             │
# │    - is_interleaving           (LC #97)   🔴                │
# │    - distinct_subsequences     (LC #115)  🔴                │
# │    - wildcard_matching         (LC #44)   🔴                │
# │ 5. DP on Trees                                               │
# │    - TreeNode (helper)                                        │
# │    - house_robber_iii          (LC #337)  🟡                │
# │    - count_unique_bst           (LC #96)   🟡                │
# │ 6. Interval DP                                                │
# │    - burst_balloons            (LC #312)  🔴                │
# │    - stone_game                (LC #877)  🟡                │
# │    - minimum_cost_tree         (LC #1130) 🔴                │
# │ 7. State Machine DP                                          │
# │    - best_time_with_cooldown   (LC #309)  🟡                │
# │    - best_time_with_fee        (LC #714)  🟡                │
# │    - best_time_k_transactions  (LC #188)  🔴                │
# │ 8. Tests                                                     │
# └─────────────────────────────────────────────────────────────┘

from functools import lru_cache
from typing import Optional


# ══════════════════════════════════════
# 1D DP — Linear
# ══════════════════════════════════════

def climbing_stairs(n: int) -> int:
    """🟢 Climbing Stairs (LC #70)
    Each step: climb 1 or 2 stairs. Count ways to reach top.
    dp[i] = dp[i-1] + dp[i-2]  — same as Fibonacci
    """
    if n <= 2: return n
    a, b = 1, 2
    for _ in range(3, n+1): a, b = b, a+b
    return b


def house_robber(nums: list[int]) -> int:
    """🟡 House Robber (LC #198)
    Can't rob adjacent houses. Maximize total.
    dp[i] = max(dp[i-1], dp[i-2] + nums[i])
    """
    if not nums: return 0
    if len(nums) == 1: return nums[0]
    a, b = nums[0], max(nums[0], nums[1])
    for i in range(2, len(nums)):
        a, b = b, max(b, a + nums[i])
    return b


def house_robber_ii(nums: list[int]) -> int:
    """🟡 House Robber II (LC #213) — circular arrangement
    First and last houses are adjacent. Run robber twice:
    once on [0..n-2], once on [1..n-1], take the max.
    """
    def rob(arr):
        a, b = 0, 0
        for n in arr: a, b = b, max(b, a+n)
        return b
    return max(nums[0], rob(nums[:-1]), rob(nums[1:]))


def min_cost_climbing_stairs(cost: list[int]) -> int:
    """🟢 Min Cost Climbing Stairs (LC #746)"""
    a, b = cost[0], cost[1]
    for i in range(2, len(cost)):
        a, b = b, cost[i] + min(a, b)
    return min(a, b)


def jump_game(nums: list[int]) -> bool:
    """🟡 Jump Game (LC #55) — can you reach the last index?
    Greedy DP: track the furthest reachable index.
    """
    reach = 0
    for i, n in enumerate(nums):
        if i > reach: return False
        reach = max(reach, i + n)
    return True


def jump_game_ii(nums: list[int]) -> int:
    """🟡 Jump Game II (LC #45) — minimum jumps to reach end"""
    jumps = cur_end = cur_far = 0
    for i in range(len(nums)-1):
        cur_far = max(cur_far, i + nums[i])
        if i == cur_end:
            jumps += 1
            cur_end = cur_far
    return jumps


def word_break(s: str, word_dict: list[str]) -> bool:
    """🟡 Word Break (LC #139)
    dp[i] = True if s[:i] can be segmented using word_dict
    """
    words = set(word_dict)
    dp = [False] * (len(s)+1)
    dp[0] = True
    for i in range(1, len(s)+1):
        for j in range(i):
            if dp[j] and s[j:i] in words:
                dp[i] = True; break
    return dp[-1]


def decode_ways(s: str) -> int:
    """🟡 Decode Ways (LC #91)
    '12' → 'AB' or 'L'. Count decodings.
    dp[i] = number of ways to decode s[:i]
    """
    if not s or s[0] == '0': return 0
    n = len(s)
    dp = [0] * (n+1); dp[0] = dp[1] = 1
    for i in range(2, n+1):
        if s[i-1] != '0': dp[i] += dp[i-1]
        two = int(s[i-2:i])
        if 10 <= two <= 26: dp[i] += dp[i-2]
    return dp[n]


def coin_change(coins: list[int], amount: int) -> int:
    """🟡 Coin Change (LC #322) — minimum coins for amount
    Unbounded knapsack variant.
    dp[i] = min coins to make amount i
    """
    dp = [float('inf')] * (amount+1); dp[0] = 0
    for a in range(1, amount+1):
        for c in coins:
            if c <= a: dp[a] = min(dp[a], dp[a-c]+1)
    return dp[amount] if dp[amount] != float('inf') else -1


def coin_change_ways(coins: list[int], amount: int) -> int:
    """🟡 Coin Change II (LC #518) — count combinations"""
    dp = [0] * (amount+1); dp[0] = 1
    for c in coins:
        for a in range(c, amount+1):
            dp[a] += dp[a-c]
    return dp[amount]


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


def max_product_subarray(nums: list[int]) -> int:
    """🟡 Maximum Product Subarray (LC #152)"""
    best = cur_max = cur_min = nums[0]
    for n in nums[1:]:
        opts = (n, cur_max*n, cur_min*n)
        cur_max, cur_min = max(opts), min(opts)
        best = max(best, cur_max)
    return best


# ══════════════════════════════════════
# 2D DP — Grid / Two Sequences
# ══════════════════════════════════════

def unique_paths(m: int, n: int) -> int:
    """🟡 Unique Paths (LC #62) — robot in m×n grid, only right/down"""
    dp = [[1]*n for _ in range(m)]
    for r in range(1, m):
        for c in range(1, n):
            dp[r][c] = dp[r-1][c] + dp[r][c-1]
    return dp[m-1][n-1]


def min_path_sum(grid: list[list[int]]) -> int:
    """🟡 Minimum Path Sum (LC #64)"""
    m, n = len(grid), len(grid[0])
    dp = [row[:] for row in grid]
    for r in range(1, m): dp[r][0] += dp[r-1][0]
    for c in range(1, n): dp[0][c] += dp[0][c-1]
    for r in range(1, m):
        for c in range(1, n):
            dp[r][c] += min(dp[r-1][c], dp[r][c-1])
    return dp[m-1][n-1]


def longest_common_subsequence(s1: str, s2: str) -> int:
    """🟡 Longest Common Subsequence (LC #1143)
    dp[i][j] = LCS of s1[:i] and s2[:j]
    """
    m, n = len(s1), len(s2)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            if s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1]+1
            else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]


def edit_distance(word1: str, word2: str) -> int:
    """🔴 Edit Distance (LC #72) — min insert/delete/replace
    dp[i][j] = edit distance between word1[:i] and word2[:j]
    """
    m, n = len(word1), len(word2)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(m+1): dp[i][0] = i
    for j in range(n+1): dp[0][j] = j
    for i in range(1, m+1):
        for j in range(1, n+1):
            if word1[i-1] == word2[j-1]: dp[i][j] = dp[i-1][j-1]
            else: dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
    return dp[m][n]


def longest_palindromic_substring(s: str) -> str:
    """🟡 Longest Palindromic Substring (LC #5) — expand around centers"""
    res, res_len = "", 0
    for i in range(len(s)):
        for l, r in [(i,i), (i,i+1)]:  # odd and even centers
            while l>=0 and r<len(s) and s[l]==s[r]: l-=1; r+=1
            if r-l-1 > res_len: res = s[l+1:r]; res_len = r-l-1
    return res


def longest_palindromic_subseq(s: str) -> int:
    """🟡 Longest Palindromic Subsequence (LC #516)"""
    n = len(s)
    dp = [[0]*n for _ in range(n)]
    for i in range(n): dp[i][i] = 1
    for length in range(2, n+1):
        for i in range(n-length+1):
            j = i+length-1
            if s[i]==s[j]: dp[i][j] = dp[i+1][j-1]+2
            else: dp[i][j] = max(dp[i+1][j], dp[i][j-1])
    return dp[0][n-1]


# ══════════════════════════════════════
# Knapsack Variants
# ══════════════════════════════════════

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


def ones_and_zeroes(strs: list[str], m: int, n: int) -> int:
    """🔴 Ones and Zeroes (LC #474) — 2D knapsack"""
    dp = [[0]*(n+1) for _ in range(m+1)]
    for s in strs:
        zeros, ones = s.count('0'), s.count('1')
        for i in range(m, zeros-1, -1):
            for j in range(n, ones-1, -1):
                dp[i][j] = max(dp[i][j], dp[i-zeros][j-ones]+1)
    return dp[m][n]


def target_sum(nums: list[int], target: int) -> int:
    """🟡 Target Sum (LC #494)
    Assign + or - to each number. Count ways to reach target.
    """
    dp = {0: 1}
    for n in nums:
        ndp = {}
        for s, cnt in dp.items():
            ndp[s+n] = ndp.get(s+n, 0) + cnt
            ndp[s-n] = ndp.get(s-n, 0) + cnt
        dp = ndp
    return dp.get(target, 0)


# ══════════════════════════════════════
# DP on Strings
# ══════════════════════════════════════

def is_interleaving(s1: str, s2: str, s3: str) -> bool:
    """🔴 Interleaving String (LC #97)"""
    m, n = len(s1), len(s2)
    if m+n != len(s3): return False
    dp = [[False]*(n+1) for _ in range(m+1)]
    dp[0][0] = True
    for i in range(1, m+1): dp[i][0] = dp[i-1][0] and s1[i-1]==s3[i-1]
    for j in range(1, n+1): dp[0][j] = dp[0][j-1] and s2[j-1]==s3[j-1]
    for i in range(1, m+1):
        for j in range(1, n+1):
            dp[i][j] = (dp[i-1][j] and s1[i-1]==s3[i+j-1]) or \
                       (dp[i][j-1] and s2[j-1]==s3[i+j-1])
    return dp[m][n]


def distinct_subsequences(s: str, t: str) -> int:
    """🔴 Distinct Subsequences (LC #115) — how many ways does t appear in s?"""
    m, n = len(s), len(t)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(m+1): dp[i][0] = 1
    for i in range(1, m+1):
        for j in range(1, n+1):
            dp[i][j] = dp[i-1][j]
            if s[i-1] == t[j-1]: dp[i][j] += dp[i-1][j-1]
    return dp[m][n]


def wildcard_matching(s: str, p: str) -> bool:
    """🔴 Wildcard Matching (LC #44) — '?' matches any char, '*' matches any sequence"""
    m, n = len(s), len(p)
    dp = [[False]*(n+1) for _ in range(m+1)]
    dp[0][0] = True
    for j in range(1, n+1): dp[0][j] = dp[0][j-1] and p[j-1]=='*'
    for i in range(1, m+1):
        for j in range(1, n+1):
            if p[j-1] == '*': dp[i][j] = dp[i-1][j] or dp[i][j-1]
            elif p[j-1]=='?' or p[j-1]==s[i-1]: dp[i][j] = dp[i-1][j-1]
    return dp[m][n]


# ══════════════════════════════════════
# DP on Trees
# ══════════════════════════════════════

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right


def house_robber_iii(root: Optional[TreeNode]) -> int:
    """🟡 House Robber III (LC #337) — rob tree nodes, no adjacent
    At each node: rob it (can't rob children) OR skip it (can rob children)
    Returns (rob_root, skip_root) tuple bottom-up.
    """
    def dp(node):
        if not node: return (0, 0)
        lr, ls = dp(node.left)
        rr, rs = dp(node.right)
        rob = node.val + ls + rs       # rob node → must skip children
        skip = max(lr, ls) + max(rr, rs)  # skip node → children can be either
        return (rob, skip)
    return max(dp(root))


def count_unique_bst(n: int) -> int:
    """🟡 Unique Binary Search Trees (LC #96) — Catalan number
    dp[i] = number of unique BSTs with i nodes
    dp[i] = sum(dp[j-1] * dp[i-j]) for j in 1..i
    """
    dp = [0]*(n+1); dp[0] = dp[1] = 1
    for i in range(2, n+1):
        for j in range(1, i+1):
            dp[i] += dp[j-1] * dp[i-j]
    return dp[n]


# ══════════════════════════════════════
# Interval DP
# ══════════════════════════════════════

def burst_balloons(nums: list[int]) -> int:
    """🔴 Burst Balloons (LC #312)
    Add sentinels 1 at both ends.
    dp[i][j] = max coins from bursting all balloons between i and j (exclusive).
    Think of k as the LAST balloon burst in range [i,j].
    """
    nums = [1] + nums + [1]
    n = len(nums)
    dp = [[0]*n for _ in range(n)]
    for length in range(2, n):
        for left in range(n-length):
            right = left+length
            for k in range(left+1, right):
                dp[left][right] = max(dp[left][right],
                    nums[left]*nums[k]*nums[right] + dp[left][k] + dp[k][right])
    return dp[0][n-1]


def stone_game(piles: list[int]) -> bool:
    """🟡 Stone Game (LC #877) — Alex always wins (math insight)"""
    return True  # Alex can always force a win with optimal play


def minimum_cost_tree(arr: list[int]) -> int:
    """🔴 Minimum Cost Tree From Leaf Values (LC #1130)
    Monotonic stack approach: O(n)
    """
    stack, cost = [float('inf')], 0
    for n in arr:
        while stack[-1] <= n:
            mid = stack.pop()
            cost += mid * min(stack[-1], n)
        stack.append(n)
    while len(stack) > 2:
        cost += stack.pop() * stack[-1]
    return cost


# ══════════════════════════════════════
# State Machine DP
# ══════════════════════════════════════

def best_time_with_cooldown(prices: list[int]) -> int:
    """🟡 Best Time to Buy and Sell Stock with Cooldown (LC #309)
    States: held, sold (cooldown), idle
    """
    held = -float('inf'); sold = idle = 0
    for p in prices:
        held, sold, idle = max(held, idle-p), held+p, max(idle, sold)
    return max(sold, idle)


def best_time_with_fee(prices: list[int], fee: int) -> int:
    """🟡 Best Time with Transaction Fee (LC #714)"""
    cash, held = 0, -prices[0]
    for p in prices[1:]:
        cash = max(cash, held+p-fee)
        held = max(held, cash-p)
    return cash


def best_time_k_transactions(k: int, prices: list[int]) -> int:
    """🔴 Best Time to Buy and Sell Stock IV (LC #188)"""
    if not prices: return 0
    n = len(prices)
    if k >= n//2:
        return sum(max(prices[i]-prices[i-1],0) for i in range(1,n))
    buy = [-float('inf')]*k; sell = [0]*k
    for p in prices:
        for j in range(k):
            buy[j] = max(buy[j], (sell[j-1] if j>0 else 0)-p)
            sell[j] = max(sell[j], buy[j]+p)
    return sell[-1]


# ══════════════════════════════════════
# TESTS
# ══════════════════════════════════════

def run_tests():
    print("Running dynamic programming tests...\n")

    assert climbing_stairs(5) == 8
    assert climbing_stairs(2) == 2
    print("  ✅ climbing_stairs")

    assert house_robber([2,7,9,3,1]) == 12
    assert house_robber([1,2,3,1]) == 4
    print("  ✅ house_robber")

    assert house_robber_ii([2,3,2]) == 3
    assert house_robber_ii([1,2,3,1]) == 4
    print("  ✅ house_robber_ii: circular")

    assert jump_game([2,3,1,1,4]) and not jump_game([3,2,1,0,4])
    print("  ✅ jump_game: reachable / blocked")

    assert jump_game_ii([2,3,1,1,4]) == 2
    assert jump_game_ii([2,3,0,1,4]) == 2
    print("  ✅ jump_game_ii")

    assert word_break("leetcode", ["leet","code"])
    assert not word_break("catsandog", ["cats","dog","sand","and","cat"])
    print("  ✅ word_break")

    assert decode_ways("12") == 2
    assert decode_ways("226") == 3
    assert decode_ways("06") == 0
    print("  ✅ decode_ways: basic / multiple / leading zero")

    assert coin_change([1,5,11], 15) == 3
    assert coin_change([1,2,5], 11) == 3
    assert coin_change([2], 3) == -1
    print("  ✅ coin_change: optimal / impossible")

    assert coin_change_ways([1,2,5], 5) == 4
    print("  ✅ coin_change_ways")

    assert longest_increasing_subsequence([10,9,2,5,3,7,101,18]) == 4
    assert longest_increasing_subsequence([0,1,0,3,2,3]) == 4
    print("  ✅ longest_increasing_subsequence")

    assert unique_paths(3,7) == 28
    assert unique_paths(3,2) == 3
    print("  ✅ unique_paths")

    assert min_path_sum([[1,3,1],[1,5,1],[4,2,1]]) == 7
    print("  ✅ min_path_sum")

    assert longest_common_subsequence("abcde","ace") == 3
    assert longest_common_subsequence("abc","abc") == 3
    assert longest_common_subsequence("abc","def") == 0
    print("  ✅ longest_common_subsequence")

    assert edit_distance("horse","ros") == 3
    assert edit_distance("intention","execution") == 5
    assert edit_distance("","abc") == 3
    print("  ✅ edit_distance")

    assert longest_palindromic_substring("babad") in ["bab","aba"]
    assert longest_palindromic_substring("cbbd") == "bb"
    print("  ✅ longest_palindromic_substring")

    assert longest_palindromic_subseq("bbbab") == 4
    assert longest_palindromic_subseq("cbbd") == 2
    print("  ✅ longest_palindromic_subseq")

    assert partition_equal_subset([1,5,11,5])
    assert not partition_equal_subset([1,2,3,5])
    print("  ✅ partition_equal_subset")

    assert target_sum([1,1,1,1,1], 3) == 5
    assert target_sum([1], 1) == 1
    print("  ✅ target_sum")

    assert is_interleaving("aab","axy","aaxaby")
    assert not is_interleaving("aabcc","dbbca","aadbbbaccc")
    assert is_interleaving("aabcc","dbbca","aadbbcbcac")
    print("  ✅ is_interleaving")

    assert distinct_subsequences("rabbbit","rabbit") == 3
    assert distinct_subsequences("babgbag","bag") == 5
    print("  ✅ distinct_subsequences")

    assert wildcard_matching("aa","*")
    assert not wildcard_matching("cb","?a")
    assert wildcard_matching("adceb","*a*b")
    print("  ✅ wildcard_matching")

    assert burst_balloons([3,1,5,8]) == 167
    assert burst_balloons([1,5]) == 10
    print("  ✅ burst_balloons")

    assert count_unique_bst(3) == 5
    assert count_unique_bst(1) == 1
    print("  ✅ count_unique_bst")

    root = TreeNode(3, TreeNode(2,None,TreeNode(3)), TreeNode(3,None,TreeNode(1)))
    assert house_robber_iii(root) == 7
    print("  ✅ house_robber_iii")

    assert best_time_with_cooldown([1,2,3,0,2]) == 3
    print("  ✅ best_time_with_cooldown")

    assert best_time_with_fee([1,3,2,8,4,9], 2) == 8
    print("  ✅ best_time_with_fee")

    assert best_time_k_transactions(2, [3,2,6,5,0,3]) == 7
    print("  ✅ best_time_k_transactions")

    assert max_product_subarray([2,3,-2,4]) == 6
    assert max_product_subarray([-2,3,-4]) == 24
    print("  ✅ max_product_subarray")

    print("\n🎉 All DP tests passed!")


if __name__ == "__main__":
    run_tests()
