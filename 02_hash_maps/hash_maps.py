"""
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HASH MAPS  ·  Python
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hash map: O(1) avg get/set/delete. O(n) worst (all collisions).
Python dict is open-addressing hash table with dynamic resizing.
Key insight: trade O(n) space for O(1) lookup everywhere.
Patterns: frequency counting, prefix sums, two-sum complement lookup.
"""
from collections import defaultdict, Counter, OrderedDict
from typing import Optional


class HashMap:
    """Manual hash map using chaining for collision resolution."""
    def __init__(self, cap=16):
        self.cap = cap
        self.buckets: list[list] = [[] for _ in range(cap)]
        self.size = 0

    def _h(self, key): return hash(key) % self.cap

    def put(self, key, val):
        b = self.buckets[self._h(key)]
        for i,(k,v) in enumerate(b):
            if k==key: b[i]=(key,val); return
        b.append((key,val)); self.size+=1

    def get(self, key):
        for k,v in self.buckets[self._h(key)]:
            if k==key: return v
        return -1

    def remove(self, key):
        b = self.buckets[self._h(key)]
        for i,(k,v) in enumerate(b):
            if k==key: b.pop(i); self.size-=1; return


# ── Problems ──────────────────────────────────

def group_anagrams(strs: list[str]) -> list[list[str]]:
    """🟡 Group Anagrams (LC #49) — sorted key"""
    groups = defaultdict(list)
    for s in strs: groups[tuple(sorted(s))].append(s)
    return list(groups.values())

def longest_consecutive(nums: list[int]) -> int:
    """🟡 Longest Consecutive Sequence (LC #128) — O(n)"""
    s = set(nums); best = 0
    for n in s:
        if n-1 not in s:
            cur = n; length = 1
            while cur+1 in s: cur+=1; length+=1
            best = max(best, length)
    return best

def longest_substring_no_repeat(s: str) -> int:
    """🟡 Longest Substring Without Repeating Characters (LC #3)"""
    last = {}; best = left = 0
    for right, c in enumerate(s):
        if c in last and last[c] >= left: left = last[c]+1
        last[c] = right; best = max(best, right-left+1)
    return best

def min_window_substring(s: str, t: str) -> str:
    """🔴 Minimum Window Substring (LC #76)"""
    need = Counter(t); missing = len(t)
    best = ""; left = i = 0
    for right, c in enumerate(s, 1):
        if need[c] > 0: missing -= 1
        need[c] -= 1
        if missing == 0:
            while need[s[left]] < 0: need[s[left]]+=1; left+=1
            if not best or right-left < len(best): best = s[left:right]
            need[s[left]]+=1; missing+=1; left+=1
    return best

def four_sum_count(a,b,c,d) -> int:
    """🟡 4Sum II (LC #454)"""
    ab = Counter(x+y for x in a for y in b)
    return sum(ab.get(-x-y,0) for x in c for y in d)

def subarray_sum_equals_k(nums: list[int], k: int) -> int:
    """🟡 Subarray Sum Equals K (LC #560)"""
    count=prefix=0; freq={0:1}
    for n in nums:
        prefix+=n; count+=freq.get(prefix-k,0); freq[prefix]=freq.get(prefix,0)+1
    return count

def word_pattern(pattern: str, s: str) -> bool:
    """🟢 Word Pattern (LC #290) — bijection check"""
    words = s.split()
    if len(pattern)!=len(words): return False
    pw, wp = {}, {}
    for p,w in zip(pattern,words):
        if p in pw and pw[p]!=w: return False
        if w in wp and wp[w]!=p: return False
        pw[p]=w; wp[w]=p
    return True

def is_isomorphic(s: str, t: str) -> bool:
    """🟢 Isomorphic Strings (LC #205)"""
    return len(set(zip(s,t)))==len(set(s))==len(set(t))

def first_unique_char(s: str) -> int:
    """🟢 First Unique Character in String (LC #387)"""
    cnt = Counter(s)
    for i,c in enumerate(s):
        if cnt[c]==1: return i
    return -1

def random_array_pick(nums: list[int]) -> 'Solution':
    class Solution:
        def __init__(self): self.m = defaultdict(list); [self.m[n].append(i) for i,n in enumerate(nums)]
        def pick(self, t): import random; return random.choice(self.m[t])
    return Solution()

def longest_subarray_at_most_k_distinct(s: str, k: int) -> int:
    """🟡 Longest Substring with At Most K Distinct (LC #340)"""
    cnt = defaultdict(int); left = best = 0
    for right, c in enumerate(s):
        cnt[c]+=1
        while len(cnt)>k: cnt[s[left]]-=1; (cnt.pop(s[left]) if cnt[s[left]]==0 else None); left+=1
        best = max(best, right-left+1)
    return best

def find_all_anagrams(s: str, p: str) -> list[int]:
    """🟡 Find All Anagrams in a String (LC #438)"""
    need = Counter(p); window = Counter(); result = []; k = len(p)
    for i,c in enumerate(s):
        window[c]+=1
        if i>=k: lc=s[i-k]; window[lc]-=1; (window.pop(lc) if window[lc]==0 else None)
        if window==need: result.append(i-k+1)
    return result

# ── Tests ─────────────────────────────────────
def run_tests():
    print("Running hash map tests...\n")

    hm = HashMap()
    hm.put('a',1); hm.put('b',2); hm.put('a',99)
    assert hm.get('a')==99 and hm.get('b')==2 and hm.get('z')==-1
    hm.remove('a'); assert hm.get('a')==-1
    print("  ✅ HashMap: put / get / update / remove")

    groups = group_anagrams(["eat","tea","tan","ate","nat","bat"])
    assert len(groups)==3 and any(sorted(g)==['ate','eat','tea'] for g in groups)
    print("  ✅ group_anagrams")

    assert longest_consecutive([100,4,200,1,3,2])==4
    assert longest_consecutive([0,3,7,2,5,8,4,6,0,1])==9
    print("  ✅ longest_consecutive: basic / long chain")

    assert longest_substring_no_repeat("abcabcbb")==3
    assert longest_substring_no_repeat("bbbbb")==1
    assert longest_substring_no_repeat("pwwkew")==3
    print("  ✅ longest_substring_no_repeat")

    assert min_window_substring("ADOBECODEBANC","ABC")=="BANC"
    assert min_window_substring("a","a")=="a"
    assert min_window_substring("a","b")==""
    print("  ✅ min_window_substring: standard / exact / impossible")

    assert subarray_sum_equals_k([1,1,1],2)==2
    assert subarray_sum_equals_k([1,2,3],3)==2
    print("  ✅ subarray_sum_equals_k")

    assert word_pattern("abba","dog cat cat dog")
    assert not word_pattern("abba","dog cat cat fish")
    print("  ✅ word_pattern: match / mismatch")

    assert is_isomorphic("egg","add") and not is_isomorphic("foo","bar")
    print("  ✅ is_isomorphic")

    assert first_unique_char("leetcode")==0
    assert first_unique_char("loveleetcode")==2
    assert first_unique_char("aabb")==-1
    print("  ✅ first_unique_char")

    assert longest_subarray_at_most_k_distinct("eceba",2)==3
    assert longest_subarray_at_most_k_distinct("aa",1)==2
    print("  ✅ longest_subarray_at_most_k_distinct")

    assert find_all_anagrams("cbaebabacd","abc")==[0,6]
    assert find_all_anagrams("abab","ab")==[0,1,2]
    print("  ✅ find_all_anagrams")

    assert four_sum_count([1,2],[-2,-1],[-1,2],[0,2])==2
    print("  ✅ four_sum_count")

    print("\n🎉 All hash map tests passed!")

if __name__ == "__main__":
    run_tests()
