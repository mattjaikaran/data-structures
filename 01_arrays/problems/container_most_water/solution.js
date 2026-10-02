/** @param {number[]} heights */
export function containerMostWater(heights) {
  let l = 0, r = heights.length - 1, best = 0;
  while (l < r) {
    best = Math.max(best, Math.min(heights[l], heights[r]) * (r - l));
    heights[l] < heights[r] ? l++ : r--;
  }
  return best;
}
