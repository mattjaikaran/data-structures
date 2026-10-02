export function searchRange(nums: number[], target: number): [number, number] {
  const bound = (upper: boolean): number => {
    let lo = 0, hi = nums.length;
    while (lo < hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
      if (nums[mid] < target || (upper && nums[mid] === target)) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };
  const first = bound(false);
  return first === nums.length || nums[first] !== target ? [-1, -1] : [first, bound(true) - 1];
}
