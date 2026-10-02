/**
 * 🟡 combinationSum (LC #39)
 * @param {number[]} candidates
 * @param {number} target
 * @returns {number[][]}
 */
export function combinationSum(candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  const bt = (start, path, rem) => {
    if (rem === 0) { result.push([...path]); return; }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > rem) break;
      path.push(candidates[i]); bt(i, path, rem - candidates[i]); path.pop();
    }
  };
  bt(0, [], target); return result;
}
