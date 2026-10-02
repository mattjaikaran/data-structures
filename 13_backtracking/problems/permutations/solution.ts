export function permutations(nums: number[]): number[][] {
  const result: number[][] = [];
  const used = new Array(nums.length).fill(false);
  const bt = (path: number[]) => {
    if (path.length === nums.length) { result.push([...path]); return; }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true; path.push(nums[i]); bt(path); path.pop(); used[i] = false;
    }
  };
  bt([]); return result;
}
