export function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);
  let keep = 0, lastEnd = -Infinity;
  for (const [start, end] of intervals) {
    if (start >= lastEnd) { keep++; lastEnd = end; }
  }
  return intervals.length - keep;
}
