/** 🟡 Merge Intervals (LC #56)
 * @param {number[][]} intervals
 * @returns {number[][]}
 */
export const mergeIntervals = (intervals) => {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];
  for (const [s, e] of intervals.slice(1)) {
    if (s <= merged[merged.length - 1][1])
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], e);
    else merged.push([s, e]);
  }
  return merged;
};
