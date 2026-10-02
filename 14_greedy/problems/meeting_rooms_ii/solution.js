/**
 * 🟡 meetingRoomsII (LC #253)
 * @param {number[][]} intervals
 * @returns {number}
 */
export function meetingRoomsII(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const heap = [];
  const push = (v) => { heap.push(v); heap.sort((a,b)=>a-b); };
  for (const [start, end] of intervals) {
    if (heap.length && heap[0] <= start) heap.shift();
    push(end);
  }
  return heap.length;
}
