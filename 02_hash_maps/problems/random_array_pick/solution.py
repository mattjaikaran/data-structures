from collections import defaultdict

def random_array_pick(nums: list[int]) -> 'Solution':
    class Solution:
        def __init__(self): self.m = defaultdict(list); [self.m[n].append(i) for i,n in enumerate(nums)]
        def pick(self, t): import random; return random.choice(self.m[t])
    return Solution()
