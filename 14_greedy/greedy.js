"use strict";
/**
 * GREEDY  ·  JavaScript
 * Locally optimal choice at each step.
 * Key: prove no swap can improve the result.
 */
// ┌─────────────────────────────────────────────────────────────┐
// │ TABLE OF CONTENTS                                           │
// ├─────────────────────────────────────────────────────────────┤
// │ 1. Intervals                                                │
// │    - meetingRooms             (LC #252)  🟡                  │
// │    - meetingRoomsII           (LC #253)  🟡                  │
// │    - eraseOverlapIntervals    (LC #435)  🟡                  │
// │    - minArrowsBurstBalloons   (LC #452)  🟡                  │
// │    - insertInterval           (LC #57)   🟡                  │
// │    - partitionLabels          (LC #763)  🟡                  │
// │ 2. Scheduling / Allocation                                  │
// │    - canCompleteCircuit       (LC #134)  🟡                  │
// │    - candy                    (LC #135)  🔴                  │
// │    - largestNumber            (LC #179)  🟡                   │
// │    - assignCookies            (LC #455)  🟢                  │
// │ 3. Two / Multi Pointer Greedy                                │
// │    - boatsToSavePeople        (LC #881)  🟡                  │
// │    - twoCityScheduling       (LC #1029) 🟡                  │
// │ 4. Greedy + Heap                                             │
// │    - findMinCostConnectSticks (LC #1167) 🟡                 │
// │ 5. Tests                                                     │
// └─────────────────────────────────────────────────────────────┘

// ══════════════════════════════════════
// Intervals
// ══════════════════════════════════════

/**
 * 🟡 meetingRooms (LC #252)
 * @param {number[][]} intervals
 * @returns {boolean}
 */
function meetingRooms(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++)
    if (intervals[i][0] < intervals[i-1][1]) return false;
  return true;
}

/**
 * 🟡 meetingRoomsII (LC #253)
 * @param {number[][]} intervals
 * @returns {number}
 */
function meetingRoomsII(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const heap = [];
  const push = (v) => { heap.push(v); heap.sort((a,b)=>a-b); };
  for (const [start, end] of intervals) {
    if (heap.length && heap[0] <= start) heap.shift();
    push(end);
  }
  return heap.length;
}

/**
 * 🟡 eraseOverlapIntervals (LC #435)
 * @param {number[][]} intervals
 * @returns {number}
 */
function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let keep = 0, lastEnd = -Infinity;
  for (const [start, end] of intervals) {
    if (start >= lastEnd) { keep++; lastEnd = end; }
  }
  return intervals.length - keep;
}

/**
 * 🟡 minArrowsBurstBalloons (LC #452)
 * @param {number[][]} points
 * @returns {number}
 */
function minArrowsBurstBalloons(points) {
  points.sort((a, b) => a[1] - b[1]);
  let arrows = 0, pos = -Infinity;
  for (const [start, end] of points) {
    if (start > pos) { arrows++; pos = end; }
  }
  return arrows;
}

/**
 * 🟡 insertInterval (LC #57)
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @returns {number[][]}
 */
function insertInterval(intervals, newInterval) {
  const result = [];
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

/**
 * 🟡 partitionLabels (LC #763)
 * @param {string} s
 * @returns {number[]}
 */
function partitionLabels(s) {
  const last = {};
  for (let i = 0; i < s.length; i++) last[s[i]] = i;
  const result = [];
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last[s[i]]);
    if (i === end) { result.push(end - start + 1); start = i + 1; }
  }
  return result;
}

// ══════════════════════════════════════
// Scheduling / Allocation
// ══════════════════════════════════════

/**
 * 🟡 canCompleteCircuit (LC #134)
 * @param {number[]} gas
 * @param {number[]} cost
 * @returns {number}
 */
function canCompleteCircuit(gas, cost) {
  if (gas.reduce((a,b)=>a+b,0) < cost.reduce((a,b)=>a+b,0)) return -1;
  let tank = 0, start = 0;
  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) { start = i + 1; tank = 0; }
  }
  return start;
}

/**
 * 🔴 candy (LC #135)
 * @param {number[]} ratings
 * @returns {number}
 */
function candy(ratings) {
  const n = ratings.length, c = new Array(n).fill(1);
  for (let i = 1; i < n; i++) if (ratings[i] > ratings[i-1]) c[i] = c[i-1]+1;
  for (let i = n-2; i >= 0; i--) if (ratings[i] > ratings[i+1]) c[i] = Math.max(c[i], c[i+1]+1);
  return c.reduce((a,b) => a+b, 0);
}

/**
 * 🟡 largestNumber (LC #179)
 * @param {number[]} nums
 * @returns {string}
 */
function largestNumber(nums) {
  const strs = nums.map(String);
  strs.sort((a, b) => (b+a > a+b ? 1 : b+a < a+b ? -1 : 0));
  const result = strs.join('');
  return result[0] === '0' ? '0' : result;
}

/**
 * 🟢 assignCookies (LC #455)
 * @param {number[]} greed
 * @param {number[]} sizes
 * @returns {number}
 */
function assignCookies(greed, sizes) {
  greed.sort((a,b)=>a-b); sizes.sort((a,b)=>a-b);
  let child = 0, cookie = 0;
  while (child < greed.length && cookie < sizes.length) {
    if (sizes[cookie] >= greed[child]) child++;
    cookie++;
  }
  return child;
}

// ══════════════════════════════════════
// Two / Multi Pointer Greedy
// ══════════════════════════════════════

/**
 * 🟡 boatsToSavePeople (LC #881)
 * @param {number[]} people
 * @param {number} limit
 * @returns {number}
 */
function boatsToSavePeople(people, limit) {
  people.sort((a,b)=>a-b);
  let l = 0, r = people.length - 1, boats = 0;
  while (l <= r) {
    if (people[l] + people[r] <= limit) l++;
    r--; boats++;
  }
  return boats;
}

/**
 * 🟡 twoCityScheduling (LC #1029)
 * @param {number[][]} costs
 * @returns {number}
 */
function twoCityScheduling(costs) {
  costs.sort((a, b) => (a[0]-a[1]) - (b[0]-b[1]));
  const n = costs.length / 2;
  return costs.slice(0,n).reduce((s,c)=>s+c[0],0) + costs.slice(n).reduce((s,c)=>s+c[1],0);
}

// ══════════════════════════════════════
// Greedy + Heap
// ══════════════════════════════════════

/**
 * 🟡 findMinCostConnectSticks (LC #1167)
 * @param {number[]} sticks
 * @returns {number}
 */
function findMinCostConnectSticks(sticks) {
  sticks = [...sticks].sort((a,b)=>a-b);
  let cost = 0;
  const push = (v) => { sticks.push(v); sticks.sort((a,b)=>a-b); };
  while (sticks.length > 1) {
    const a = sticks.shift(), b = sticks.shift();
    cost += a + b; push(a + b);
  }
  return cost;
}

// ══════════════════════════════════════
// Tests
// ══════════════════════════════════════
/**
 * @param {boolean} c
 * @param {string} m
 */
function assert(c, m) { if (!c) throw new Error(`FAIL: ${m}`); }
/**
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

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

  console.log("\n✓ greedy — all tests passed");
}

runTests();
