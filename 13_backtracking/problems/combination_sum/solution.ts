export function combinationSum(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const result: number[][] = [];
  const bt = (start: number, path: number[], rem: number) => {
    if (rem === 0) { result.push([...path]); return; }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > rem) break;
      path.push(candidates[i]); bt(i, path, rem - candidates[i]); path.pop();
    }
  };
  bt(0, [], target); return result;
}
