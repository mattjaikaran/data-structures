/** 🔴 Largest Rectangle in Histogram (LC #84) — O(n) time, O(n) space */
export function largestRectangleHistogram(heights: number[]): number {
  // Stack stores [leftBoundary, height] pairs
  const stack: [number, number][] = [];
  let best = 0;
  for (let i = 0; i <= heights.length; i++) {
    const h = i < heights.length ? heights[i] : 0; // sentinel
    let start = i;
    while (stack.length && stack[stack.length - 1][1] > h) {
      const [left, barH] = stack.pop()!;
      best = Math.max(best, barH * (i - left));
      start = left;
    }
    stack.push([start, h]);
  }
  return best;
}
