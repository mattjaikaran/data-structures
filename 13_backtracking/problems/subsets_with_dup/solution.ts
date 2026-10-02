export function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const bt = (start: number, path: number[]) => {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i-1]) continue;
      path.push(nums[i]); bt(i + 1, path); path.pop();
    }
  };
  bt(0, []); return result;
}
