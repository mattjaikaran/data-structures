"use strict";

/**
 * SORTING  ·  JavaScript
 * Bubble, insertion, merge, quick, heap, counting, radix.
 * Quickselect, Dutch national flag, merge intervals.
 */

// ┌─────────────────────────────────────────────────────────────────┐
// │ TABLE OF CONTENTS                                               │
// ├─────────────────────────────────────────────────────────────────┤
// │ 1. Basic sorts                                                  │
// │    - bubbleSort, insertionSort                                  │
// │ 2. O(n log n) sorts                                             │
// │    - mergeSort, quickSort, heapSort                             │
// │ 3. Non-comparison sorts                                         │
// │    - countingSort, radixSort                                    │
// │ 4. Problems                                                     │
// │    - quickselect               (kth smallest)     🟡             │
// │    - dutchNationalFlag         (LC #75)           🟡             │
// │    - mergeIntervals            (LC #56)           🟡             │
// │ 5. Tests                                                       │
// └─────────────────────────────────────────────────────────────────┘

// ══════════════════════════════════════
// BASIC SORTS
// ══════════════════════════════════════

/** @param {number[]} arr
 * @returns {number[]}
 */
const bubbleSort = (arr) => {
  const a = [...arr];
  const n = a.length;
  for (let i = 0; i < n; i++) {
    let sw = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        sw = true;
      }
    }
    if (!sw) break;
  }
  return a;
};

/** @param {number[]} arr
 * @returns {number[]}
 */
const insertionSort = (arr) => {
  const a = [...arr];
  for (let i = 1; i < a.length; i++) {
    const key = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = key;
  }
  return a;
};

/** @param {number[]} arr
 * @returns {number[]}
 */
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = arr.length >> 1;
  const merge = (l, r) => {
    const res = [];
    let i = 0,
      j = 0;
    while (i < l.length && j < r.length)
      res.push(l[i] <= r[j] ? l[i++] : r[j++]);
    return [...res, ...l.slice(i), ...r.slice(j)];
  };
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
};

/** @param {number[]} arr
 * @returns {number[]}
 */
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(Math.random() * arr.length)];
  return [
    ...quickSort(arr.filter((x) => x < pivot)),
    ...arr.filter((x) => x === pivot),
    ...quickSort(arr.filter((x) => x > pivot)),
  ];
};

/** @param {number[]} arr
 * @returns {number[]}
 */
const heapSort = (arr) => {
  const a = [...arr];
  const n = a.length;
  const heapify = (n, i) => {
    let m = i,
      l = 2 * i + 1,
      r = 2 * i + 2;
    if (l < n && a[l] > a[m]) m = l;
    if (r < n && a[r] > a[m]) m = r;
    if (m !== i) {
      [a[m], a[i]] = [a[i], a[m]];
      heapify(n, m);
    }
  };
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(n, i);
  for (let i = n - 1; i > 0; i--) {
    [a[0], a[i]] = [a[i], a[0]];
    heapify(i, 0);
  }
  return a;
};

/** @param {number[]} arr
 * @returns {number[]}
 */
const countingSort = (arr) => {
  if (!arr.length) return [];
  const k = Math.max(...arr) + 1;
  const cnt = new Array(k).fill(0);
  for (const n of arr) cnt[n]++;
  return cnt.flatMap((c, v) => new Array(c).fill(v));
};

/** @param {number[]} arr
 * @returns {number[]}
 */
const radixSort = (arr) => {
  if (!arr.length) return [];
  let a = [...arr];
  let exp = 1;
  const max = Math.max(...a);
  while (Math.floor(max / exp) > 0) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (const n of a) buckets[Math.floor(n / exp) % 10].push(n);
    a = buckets.flat();
    exp *= 10;
  }
  return a;
};

// ══════════════════════════════════════
// PROBLEMS
// ══════════════════════════════════════

/** 🟡 Kth smallest via quickselect
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
const quickselect = (nums, k) => {
  const a = [...nums];
  const partition = (lo, hi) => {
    const p = a[hi];
    let i = lo;
    for (let j = lo; j < hi; j++)
      if (a[j] <= p) {
        [a[i], a[j]] = [a[j], a[i]];
        i++;
      }
    [a[i], a[hi]] = [a[hi], a[i]];
    return i;
  };
  const select = (lo, hi, k) => {
    if (lo === hi) return a[lo];
    const p = partition(lo, hi);
    if (k === p) return a[k];
    return k < p ? select(lo, p - 1, k) : select(p + 1, hi, k);
  };
  return select(0, a.length - 1, k - 1);
};

/** 🟡 Dutch National Flag (LC #75)
 * @param {number[]} nums
 * @returns {number[]}
 */
const dutchNationalFlag = (nums) => {
  const a = [...nums];
  let lo = 0,
    mid = 0,
    hi = a.length - 1;
  while (mid <= hi) {
    if (a[mid] === 0) {
      [a[lo], a[mid]] = [a[mid], a[lo]];
      lo++;
      mid++;
    } else if (a[mid] === 1) mid++;
    else {
      [a[mid], a[hi]] = [a[hi], a[mid]];
      hi--;
    }
  }
  return a;
};

/** 🟡 Merge Intervals (LC #56)
 * @param {number[][]} intervals
 * @returns {number[][]}
 */
const mergeIntervals = (intervals) => {
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

// ══════════════════════════════════════
// TESTS
// ══════════════════════════════════════

/** @param {boolean} c
 * @param {string} m
 */
function assert(c, m) {
  if (!c) throw new Error(`FAIL: ${m}`);
}

/** @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function runTests() {
  console.log("Running sorting tests...\n");
  const tests = [
    [64, 34, 25, 12, 22, 11, 90],
    [5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5],
    [],
    [1, 1, 1],
  ];
  const exp = tests.map((t) => [...t].sort((a, b) => a - b));
  const fns = [
    [bubbleSort, "bubble"],
    [insertionSort, "insertion"],
    [mergeSort, "merge"],
    [quickSort, "quick"],
    [heapSort, "heap"],
  ];
  for (const [fn, name] of fns) {
    for (let i = 0; i < tests.length; i++)
      assert(eq(fn(tests[i]), exp[i]), `${name} case ${i}`);
    console.log(`  ✅ ${name}Sort`);
  }
  assert(
    eq(countingSort([4, 2, 2, 8, 3, 3, 1]), [1, 2, 2, 3, 3, 4, 8]),
    "counting"
  );
  console.log("  ✅ countingSort");
  assert(
    eq(radixSort([170, 45, 75, 90, 802, 24, 2, 66]), [2, 24, 45, 66, 75, 90, 170, 802]),
    "radix"
  );
  console.log("  ✅ radixSort");
  assert(quickselect([3, 2, 1, 5, 6, 4], 2) === 2, "quickselect");
  console.log("  ✅ quickselect");
  assert(
    eq(dutchNationalFlag([2, 0, 2, 1, 1, 0]), [0, 0, 1, 1, 2, 2]),
    "dutch"
  );
  console.log("  ✅ dutchNationalFlag");
  assert(
    eq(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]), [
      [1, 6],
      [8, 10],
      [15, 18],
    ]),
    "mergeInt"
  );
  console.log("  ✅ mergeIntervals");
  console.log("\n✓ sorting — all tests passed");
}
runTests();
