/**
 * GREEDY  ·  TypeScript
 * Locally optimal choice at each step.
 * Key: prove no swap can improve the result.
 */

function meetingRooms(intervals: number[][]): boolean {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++)
    if (intervals[i][0] < intervals[i-1][1]) return false;
  return true;
}

function meetingRoomsII(intervals: number[][]): number {
  intervals.sort((a, b) => a[0] - b[0]);
  const heap: number[] = [];
  const push = (v: number) => { heap.push(v); heap.sort((a,b)=>a-b); };
  for (const [start, end] of intervals) {
    if (heap.length && heap[0] <= start) heap.shift();
    push(end);
  }
  return heap.length;
}

function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);
  let keep = 0, lastEnd = -Infinity;
  for (const [start, end] of intervals) {
    if (start >= lastEnd) { keep++; lastEnd = end; }
  }
  return intervals.length - keep;
}

function minArrowsBurstBalloons(points: number[][]): number {
  points.sort((a, b) => a[1] - b[1]);
  let arrows = 0, pos = -Infinity;
  for (const [start, end] of points) {
    if (start > pos) { arrows++; pos = end; }
  }
  return arrows;
}

function insertInterval(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];
  let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) result.push(intervals[i++]);
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]); i++;
  }
  result.push(newInterval);
  while (i < intervals.length) result.push(intervals[i++]);
  return result;
}

function partitionLabels(s: string): number[] {
  const last: Record<string,number> = {};
  for (let i = 0; i < s.length; i++) last[s[i]] = i;
  const result: number[] = [];
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last[s[i]]);
    if (i === end) { result.push(end - start + 1); start = i + 1; }
  }
  return result;
}

function canCompleteCircuit(gas: number[], cost: number[]): number {
  if (gas.reduce((a,b)=>a+b,0) < cost.reduce((a,b)=>a+b,0)) return -1;
  let tank = 0, start = 0;
  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) { start = i + 1; tank = 0; }
  }
  return start;
}

function candy(ratings: number[]): number {
  const n = ratings.length, c = new Array(n).fill(1);
  for (let i = 1; i < n; i++) if (ratings[i] > ratings[i-1]) c[i] = c[i-1]+1;
  for (let i = n-2; i >= 0; i--) if (ratings[i] > ratings[i+1]) c[i] = Math.max(c[i], c[i+1]+1);
  return c.reduce((a,b) => a+b, 0);
}

function largestNumber(nums: number[]): string {
  const strs = nums.map(String);
  strs.sort((a, b) => (b+a > a+b ? 1 : b+a < a+b ? -1 : 0));
  const result = strs.join('');
  return result[0] === '0' ? '0' : result;
}

function assignCookies(greed: number[], sizes: number[]): number {
  greed.sort((a,b)=>a-b); sizes.sort((a,b)=>a-b);
  let child = 0, cookie = 0;
  while (child < greed.length && cookie < sizes.length) {
    if (sizes[cookie] >= greed[child]) child++;
    cookie++;
  }
  return child;
}

function boatsToSavePeople(people: number[], limit: number): number {
  people.sort((a,b)=>a-b);
  let l = 0, r = people.length - 1, boats = 0;
  while (l <= r) {
    if (people[l] + people[r] <= limit) l++;
    r--; boats++;
  }
  return boats;
}

function twoCityScheduling(costs: number[][]): number {
  costs.sort((a, b) => (a[0]-a[1]) - (b[0]-b[1]));
  const n = costs.length / 2;
  return costs.slice(0,n).reduce((s,c)=>s+c[0],0) + costs.slice(n).reduce((s,c)=>s+c[1],0);
}

function findMinCostConnectSticks(sticks: number[]): number {
  // Simple min-heap simulation
  sticks = [...sticks].sort((a,b)=>a-b);
  let cost = 0;
  const push = (v: number) => { sticks.push(v); sticks.sort((a,b)=>a-b); };
  while (sticks.length > 1) {
    const a = sticks.shift()!, b = sticks.shift()!;
    cost += a + b; push(a + b);
  }
  return cost;
}

// ── Tests ─────────────────────────────────────
function assert(c: boolean, m: string) { if (!c) throw new Error(`FAIL: ${m}`); }
const eq = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

function runTests() {
  console.log("Running greedy tests...\n");

  assert(!meetingRooms([[0,30],[5,10],[15,20]]), "meetingRooms conflict");
  assert(meetingRooms([[7,10],[2,4]]), "meetingRooms ok");
  console.log("  ✅ meetingRooms");

  assert(meetingRoomsII([[0,30],[5,10],[15,20]]) === 2, "meetingRoomsII");
  console.log("  ✅ meetingRoomsII");

  assert(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]) === 1, "eraseOverlap");
  console.log("  ✅ eraseOverlapIntervals");

  assert(minArrowsBurstBalloons([[10,16],[2,8],[1,6],[7,12]]) === 2, "arrows");
  console.log("  ✅ minArrowsBurstBalloons");

  assert(eq(insertInterval([[1,3],[6,9]],[2,5]),[[1,5],[6,9]]), "insertInterval");
  console.log("  ✅ insertInterval");

  assert(eq(partitionLabels("ababcbacadefegdehijhklij"),[9,7,8]), "partitionLabels");
  console.log("  ✅ partitionLabels");

  assert(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]) === 3, "gasStation");
  assert(canCompleteCircuit([2,3,4],[3,4,3]) === -1, "gasStation impossible");
  console.log("  ✅ canCompleteCircuit");

  assert(candy([1,0,2]) === 5 && candy([1,2,2]) === 4, "candy");
  console.log("  ✅ candy");

  assert(largestNumber([10,2]) === "210", "largestNumber");
  assert(largestNumber([3,30,34,5,9]) === "9534330", "largestNumber2");
  console.log("  ✅ largestNumber");

  assert(assignCookies([1,2,3],[1,1]) === 1, "assignCookies");
  console.log("  ✅ assignCookies");

  assert(boatsToSavePeople([1,2],3) === 1, "boats");
  assert(boatsToSavePeople([3,2,2,1],3) === 3, "boats2");
  console.log("  ✅ boatsToSavePeople");

  assert(twoCityScheduling([[10,20],[30,200],[400,50],[30,20]]) === 110, "twoCityScheduling");
  console.log("  ✅ twoCityScheduling");

  assert(findMinCostConnectSticks([2,4,3]) === 14, "connectSticks");
  console.log("  ✅ findMinCostConnectSticks");

  console.log("\n🎉 All greedy tests passed!");
}
runTests();
export { meetingRooms, meetingRoomsII, eraseOverlapIntervals, minArrowsBurstBalloons, insertInterval, partitionLabels, canCompleteCircuit, candy, largestNumber, assignCookies, boatsToSavePeople, twoCityScheduling, findMinCostConnectSticks };
