/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ARRAYS  ·  TypeScript
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * TypeScript's Array<T> is a dynamic array backed by a V8 JSArray.
 * The type system adds compile-time safety on top of JS arrays.
 *
 * COMPLEXITY SUMMARY
 *  Access:            O(1)
 *  Search (unsorted): O(n)
 *  Search (sorted):   O(log n)
 *  Append:            O(1) amortized
 *  Insert at index:   O(n)
 *  Delete at index:   O(n)
 *
 * PATTERNS COVERED
 *  • Two Pointers     • Sliding Window
 *  • Prefix Sum       • Kadane's
 *  • Binary Search    • Monotonic Stack
 */

// ══════════════════════════════════════════════
// PART 1 — DYNAMIC ARRAY
// ══════════════════════════════════════════════

class DynamicArray<T> {
  private data: (T | undefined)[];
  private _size = 0;
  private _cap: number;

  constructor(initialCap = 4) {
    this._cap = initialCap;
    this.data = new Array(initialCap);
  }

  get size(): number { return this._size; }
  get capacity(): number { return this._cap; }

  get(i: number): T {
    this.checkBounds(i);
    return this.data[i] as T;
  }

  set(i: number, val: T): void {
    this.checkBounds(i);
    this.data[i] = val;
  }

  /** O(1) amortized */
  append(val: T): void {
    if (this._size === this._cap) this.resize(this._cap * 2);
    this.data[this._size++] = val;
  }

  /** O(n) */
  insert(i: number, val: T): void {
    if (i < 0 || i > this._size) throw new RangeError(`Index ${i} out of range`);
    if (this._size === this._cap) this.resize(this._cap * 2);
    for (let j = this._size; j > i; j--) this.data[j] = this.data[j - 1];
    this.data[i] = val;
    this._size++;
  }

  /** O(n) */
  removeAt(i: number): T {
    this.checkBounds(i);
    const val = this.data[i] as T;
    for (let j = i; j < this._size - 1; j++) this.data[j] = this.data[j + 1];
    this.data[--this._size] = undefined;
    return val;
  }

  toArray(): T[] {
    return Array.from({ length: this._size }, (_, i) => this.data[i] as T);
  }

  private resize(newCap: number): void {
    const next = new Array<T | undefined>(newCap);
    for (let i = 0; i < this._size; i++) next[i] = this.data[i];
    this.data = next;
    this._cap = newCap;
  }

  private checkBounds(i: number): void {
    if (i < 0 || i >= this._size) throw new RangeError(`Index ${i} out of range`);
  }
}

// ══════════════════════════════════════════════
// PART 2 — CORE ALGORITHMS
// ══════════════════════════════════════════════

/**
 * Binary Search — O(log n) time, O(1) space.
 * Returns index or -1.
 */
function binarySearch(arr: number[], target: number): number {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

/**
 * Prefix Sum — O(n) build, O(1) range query.
 * prefixSum[i] = sum of arr[0..i-1]
 * Range sum [l, r] = prefix[r+1] - prefix[l]
 */
function buildPrefixSum(nums: number[]): number[] {
  const prefix = new Array<number>(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) prefix[i + 1] = prefix[i] + nums[i];
  return prefix;
}

/**
 * Kadane's Algorithm — max contiguous subarray sum.
 * O(n) time, O(1) space.
 */
function maxSubarrayKadane(nums: number[]): number {
  let best = nums[0], current = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    best = Math.max(best, current);
  }
  return best;
}

/**
 * Sliding Window Maximum Sum (fixed window size k).
 * O(n) time, O(1) space.
 */
function slidingWindowMaxSum(nums: number[], k: number): number {
  let window = nums.slice(0, k).reduce((a, b) => a + b, 0);
  let best = window;
  for (let i = k; i < nums.length; i++) {
    window += nums[i] - nums[i - k];
    best = Math.max(best, window);
  }
  return best;
}

/**
 * Rotate array right by k steps. In-place.
 * O(n) time, O(1) space — reversal trick.
 */
function rotateRight(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n;
  const rev = (l: number, r: number): void => {
    while (l < r) { [nums[l], nums[r]] = [nums[r], nums[l]]; l++; r--; }
  };
  rev(0, n - 1);
  rev(0, k - 1);
  rev(k, n - 1);
}

// ══════════════════════════════════════════════
// PART 3 — INTERVIEW PROBLEMS
// ══════════════════════════════════════════════

// ── 🟢 Easy ────────────────────────────────────

/** 🟢 Two Sum (LC #1) — O(n) time, O(n) space */
function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (seen.has(comp)) return [seen.get(comp)!, i];
    seen.set(nums[i], i);
  }
  return [];
}

/** 🟢 Best Time to Buy and Sell Stock (LC #121) — O(n) time, O(1) space */
function bestTimeBuySell(prices: number[]): number {
  let minPrice = Infinity, maxProfit = 0;
  for (const p of prices) {
    minPrice = Math.min(minPrice, p);
    maxProfit = Math.max(maxProfit, p - minPrice);
  }
  return maxProfit;
}

/** 🟢 Contains Duplicate (LC #217) — O(n) time, O(n) space */
function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}

/** 🟢 Move Zeroes (LC #283) — O(n) time, O(1) space */
function moveZeroes(nums: number[]): void {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
}

// ── 🟡 Medium ──────────────────────────────────

/** 🟡 Product of Array Except Self (LC #238) — O(n) time, O(1) extra */
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array<number>(n).fill(1);
  let prefix = 1;
  for (let i = 0; i < n; i++) { result[i] = prefix; prefix *= nums[i]; }
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) { result[i] *= suffix; suffix *= nums[i]; }
  return result;
}

/** 🟡 Maximum Subarray (LC #53) — O(n) time, O(1) space */
function maxSubarray(nums: number[]): number {
  let best = nums[0], current = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    best = Math.max(best, current);
  }
  return best;
}

/** 🟡 3Sum (LC #15) — O(n²) time, O(1) extra */
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const s = nums[i] + nums[l] + nums[r];
      if (s === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++; r--;
      } else if (s < 0) l++;
      else r--;
    }
  }
  return result;
}

/** 🟡 Maximum Product Subarray (LC #152) — O(n) time, O(1) space */
function maxProductSubarray(nums: number[]): number {
  let best = nums[0], curMax = nums[0], curMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const [a, b, c] = [nums[i], curMax * nums[i], curMin * nums[i]];
    curMax = Math.max(a, b, c);
    curMin = Math.min(a, b, c);
    best = Math.max(best, curMax);
  }
  return best;
}

/** 🟡 Subarray Sum Equals K (LC #560) — O(n) time, O(n) space */
function subarraySumK(nums: number[], k: number): number {
  let count = 0, prefix = 0;
  const freq = new Map<number, number>([[0, 1]]);
  for (const n of nums) {
    prefix += n;
    count += freq.get(prefix - k) ?? 0;
    freq.set(prefix, (freq.get(prefix) ?? 0) + 1);
  }
  return count;
}

/** 🟡 Container With Most Water (LC #11) — O(n) time, O(1) space */
function containerMostWater(heights: number[]): number {
  let l = 0, r = heights.length - 1, best = 0;
  while (l < r) {
    best = Math.max(best, Math.min(heights[l], heights[r]) * (r - l));
    heights[l] < heights[r] ? l++ : r--;
  }
  return best;
}

/** 🟡 Search in Rotated Sorted Array (LC #33) — O(log n) time */
function searchRotated(nums: number[], target: number): number {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;
    if (nums[l] <= nums[mid]) {           // left half sorted
      if (nums[l] <= target && target < nums[mid]) r = mid - 1;
      else l = mid + 1;
    } else {                              // right half sorted
      if (nums[mid] < target && target <= nums[r]) l = mid + 1;
      else r = mid - 1;
    }
  }
  return -1;
}

// ── 🔴 Hard ────────────────────────────────────

/** 🔴 Trapping Rain Water (LC #42) — O(n) time, O(1) space */
function trapRainWater(height: number[]): number {
  let l = 0, r = height.length - 1, lMax = 0, rMax = 0, water = 0;
  while (l < r) {
    if (height[l] < height[r]) {
      height[l] >= lMax ? (lMax = height[l]) : (water += lMax - height[l]);
      l++;
    } else {
      height[r] >= rMax ? (rMax = height[r]) : (water += rMax - height[r]);
      r--;
    }
  }
  return water;
}

/** 🔴 Largest Rectangle in Histogram (LC #84) — O(n) time, O(n) space */
function largestRectangleHistogram(heights: number[]): number {
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

// ══════════════════════════════════════════════
// PART 4 — TESTS
// ══════════════════════════════════════════════

function assert(condition: boolean, msg: string): void {
  if (!condition) throw new Error(`FAIL: ${msg}`);
}

function deepEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

function runTests(): void {
  console.log("Running array tests...\n");

  // DynamicArray
  const da = new DynamicArray<number>();
  for (let i = 0; i < 10; i++) da.append(i);
  assert(da.size === 10, "size after appends");
  assert(da.get(0) === 0 && da.get(9) === 9, "get boundaries");
  da.insert(3, 99);
  assert(da.get(3) === 99 && da.size === 11, "insert");
  da.removeAt(3);
  assert(da.get(3) === 3 && da.size === 10, "removeAt");
  console.log("  ✅ DynamicArray: append / insert / removeAt / resize");

  // binarySearch
  const sorted = [1, 3, 5, 7, 9, 11, 13];
  assert(binarySearch(sorted, 7) === 3, "bs found");
  assert(binarySearch(sorted, 1) === 0, "bs left boundary");
  assert(binarySearch(sorted, 13) === 6, "bs right boundary");
  assert(binarySearch(sorted, 6) === -1, "bs not found");
  console.log("  ✅ binarySearch: found / not found / boundaries");

  // buildPrefixSum
  const p = buildPrefixSum([1, 2, 3, 4, 5]);
  assert(p[4] - p[1] === 9, "prefix range sum [1..3]");
  assert(p[5] === 15, "prefix total");
  console.log("  ✅ buildPrefixSum: range queries");

  // maxSubarrayKadane
  assert(maxSubarrayKadane([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6, "kadane classic");
  assert(maxSubarrayKadane([-1, -2, -3]) === -1, "kadane all negative");
  assert(maxSubarrayKadane([1]) === 1, "kadane single");
  console.log("  ✅ maxSubarrayKadane: mixed / all-negative / single");

  // slidingWindowMaxSum
  assert(slidingWindowMaxSum([2, 1, 5, 1, 3, 2], 3) === 9, "sliding window");
  console.log("  ✅ slidingWindowMaxSum");

  // twoSum
  assert(deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]), "two sum basic");
  assert(deepEqual(twoSum([3, 2, 4], 6), [1, 2]), "two sum non-adjacent");
  assert(deepEqual(twoSum([3, 3], 6), [0, 1]), "two sum duplicate");
  console.log("  ✅ twoSum: basic / non-adjacent / duplicate");

  // bestTimeBuySell
  assert(bestTimeBuySell([7, 1, 5, 3, 6, 4]) === 5, "buy sell profit");
  assert(bestTimeBuySell([7, 6, 4, 3, 1]) === 0, "buy sell no profit");
  console.log("  ✅ bestTimeBuySell: profit / no profit");

  // productExceptSelf
  assert(deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]), "product except self");
  assert(deepEqual(productExceptSelf([0, 1]), [1, 0]), "product with zero");
  console.log("  ✅ productExceptSelf: standard / with zero");

  // threeSum
  const ts = threeSum([-1, 0, 1, 2, -1, -4]).map(t => [...t].sort((a,b)=>a-b)).sort();
  assert(deepEqual(ts, [[-1, -1, 2], [-1, 0, 1]]), "three sum");
  assert(deepEqual(threeSum([0, 0, 0]), [[0, 0, 0]]), "three sum all zeros");
  assert(deepEqual(threeSum([1, 2, 3]), []), "three sum no result");
  console.log("  ✅ threeSum: standard / all zeros / no triplets");

  // maxProductSubarray
  assert(maxProductSubarray([2, 3, -2, 4]) === 6, "max product");
  assert(maxProductSubarray([-2, 0, -1]) === 0, "max product with zero");
  assert(maxProductSubarray([-2, 3, -4]) === 24, "max product two negatives");
  console.log("  ✅ maxProductSubarray: positive / with zero / two negatives");

  // subarraySumK
  assert(subarraySumK([1, 1, 1], 2) === 2, "subarray sum k");
  assert(subarraySumK([1, 2, 3], 3) === 2, "subarray sum k overlapping");
  assert(subarraySumK([-1, -1, 1], 0) === 1, "subarray sum k negative");
  console.log("  ✅ subarraySumK: basic / overlapping / negatives");

  // containerMostWater
  assert(containerMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]) === 49, "container water");
  assert(containerMostWater([1, 1]) === 1, "container water min");
  console.log("  ✅ containerMostWater");

  // searchRotated
  assert(searchRotated([4, 5, 6, 7, 0, 1, 2], 0) === 4, "search rotated found");
  assert(searchRotated([4, 5, 6, 7, 0, 1, 2], 3) === -1, "search rotated not found");
  assert(searchRotated([1], 0) === -1, "search rotated single");
  console.log("  ✅ searchRotated: found / not found / single element");

  // trapRainWater
  assert(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) === 6, "trap classic");
  assert(trapRainWater([4, 2, 0, 3, 2, 5]) === 9, "trap valley");
  assert(trapRainWater([3, 0, 3]) === 3, "trap symmetric");
  console.log("  ✅ trapRainWater: classic / valley / symmetric");

  // largestRectangleHistogram
  assert(largestRectangleHistogram([2, 1, 5, 6, 2, 3]) === 10, "histogram classic");
  assert(largestRectangleHistogram([2, 4]) === 4, "histogram two bars");
  assert(largestRectangleHistogram([1]) === 1, "histogram single");
  console.log("  ✅ largestRectangleHistogram");

  // moveZeroes
  const mz = [0, 1, 0, 3, 12];
  moveZeroes(mz);
  assert(deepEqual(mz, [1, 3, 12, 0, 0]), "move zeroes");
  console.log("  ✅ moveZeroes");

  // rotateRight
  const rot = [1, 2, 3, 4, 5];
  rotateRight(rot, 2);
  assert(deepEqual(rot, [4, 5, 1, 2, 3]), "rotate right");
  const rot2 = [1, 2, 3];
  rotateRight(rot2, 4);
  assert(deepEqual(rot2, [3, 1, 2]), "rotate right k > n");
  console.log("  ✅ rotateRight: standard / k > n");

  console.log("\n🎉 All array tests passed!");
}

runTests();

export {
  DynamicArray,
  binarySearch, buildPrefixSum, maxSubarrayKadane, slidingWindowMaxSum, rotateRight,
  twoSum, bestTimeBuySell, containsDuplicate, moveZeroes,
  productExceptSelf, maxSubarray, threeSum, maxProductSubarray,
  subarraySumK, containerMostWater, searchRotated,
  trapRainWater, largestRectangleHistogram,
};
