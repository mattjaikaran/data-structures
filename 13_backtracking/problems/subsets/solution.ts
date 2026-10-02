/**
 * BACKTRACKING  ·  TypeScript
 * Choose → explore → unchoose. Prune early.
 */
export function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const bt = (start: number, path: number[]) => {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]); bt(i + 1, path); path.pop();
    }
  };
  bt(0, []); return result;
}
