import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from problems.search_range.solution import search_range
for nums, target, expected in [([1,2,2,2,4],2,[1,3]),([2,2],2,[0,1]),([2],2,[0,0]),([1,3],2,[-1,-1]),([],2,[-1,-1]),([1,3],4,[-1,-1])]:
    original = nums[:]
    assert search_range(nums, target) == expected
    assert nums == original
print('PASS 01_arrays/search_range (py)')
