/**
 * GREEDY  ·  TypeScript
 * Locally optimal choice at each step.
 * Key: prove no swap can improve the result.
 */
export function meetingRooms(intervals: number[][]): boolean {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++)
    if (intervals[i][0] < intervals[i-1][1]) return false;
  return true;
}
