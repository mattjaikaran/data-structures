export function meetingRoomsII(intervals: number[][]): number {
  intervals.sort((a, b) => a[0] - b[0]);
  const heap: number[] = [];
  const push = (v: number) => { heap.push(v); heap.sort((a,b)=>a-b); };
  for (const [start, end] of intervals) {
    if (heap.length && heap[0] <= start) heap.shift();
    push(end);
  }
  return heap.length;
}
