/**
 * 🟡 minArrowsBurstBalloons (LC #452)
 * @param {number[][]} points
 * @returns {number}
 */
export function minArrowsBurstBalloons(points) {
  points.sort((a, b) => a[1] - b[1]);
  let arrows = 0, pos = -Infinity;
  for (const [start, end] of points) {
    if (start > pos) { arrows++; pos = end; }
  }
  return arrows;
}
