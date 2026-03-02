"use strict";

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ARRAYS  ·  JavaScript
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * JavaScript's Array is a dynamic array backed by a V8 JSArray.
 * Vanilla JS with JSDoc type annotations.
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

// ┌─────────────────────────────────────────────┐
// │ TABLE OF CONTENTS                           │
// ├─────────────────────────────────────────────┤
// │ 1. DynamicArray class                       │
// │ 2. Core Algorithms                          │
// │    - binarySearch                           │
// │    - buildPrefixSum                         │
// │    - maxSubarrayKadane                      │
// │    - slidingWindowMaxSum                    │
// │    - rotateRight                            │
// │ 3. Interview Problems                       │
// │    - twoSum                 (LC #1)   🟢    │
// │    - bestTimeBuySell        (LC #121) 🟢    │
// │    - containsDuplicate      (LC #217) 🟢    │
// │    - moveZeroes             (LC #283) 🟢    │
// │    - productExceptSelf      (LC #238) 🟡    │
// │    - maxSubarray            (LC #53)  🟡    │
// │    - threeSum               (LC #15)  🟡    │
// │    - maxProductSubarray     (LC #152) 🟡    │
// │    - subarraySumK           (LC #560) 🟡    │
// │    - containerMostWater     (LC #11)  🟡    │
// │    - searchRotated          (LC #33)  🟡    │
// │    - trapRainWater          (LC #42)  🔴    │
// │    - largestRectangleHistogram (LC #84) 🔴  │
// │ 4. Tests                                    │
// └─────────────────────────────────────────────┘

// ══════════════════════════════════════════════
// PART 1 — DYNAMIC ARRAY
// ══════════════════════════════════════════════

/**
 * @template T
 */
class DynamicArray {
  /** @type {(T | undefined)[]} */
  #data;
  /** @type {number} */
  #size = 0;
  /** @type {number} */
  #cap;

  /** @param {number} [initialCap=4] */
  constructor(initialCap = 4) {
    this.#cap = initialCap;
    this.#data = new Array(initialCap);
  }

  get size() { return this.#size; }
  get capacity() { return this.#cap; }

  /**
   * @param {number} i
   * @returns {T}
   */
  get(i) {
    this.#checkBounds(i);
    return this.#data[i];
  }

  /**
   * @param {number} i
   * @param {T} val
   */
  set(i, val) {
    this.#checkBounds(i);
    this.#data[i] = val;
  }

  /** O(1) amortized */
  /** @param {T} val */
  append(val) {
    if (this.#size === this.#cap) this.#resize(this.#cap * 2);
    this.#data[this.#size++] = val;
  }

  /** O(n) */
  /**
   * @param {number} i
   * @param {T} val
   */
  insert(i, val) {
    if (i < 0 || i > this.#size) throw new RangeError(`Index ${i} out of range`);
    if (this.#size === this.#cap) this.#resize(this.#cap * 2);
    for (let j = this.#size; j > i; j--) this.#data[j] = this.#data[j - 1];
    this.#data[i] = val;
    this.#size++;
  }

  /** O(n) */
  /**
   * @param {number} i
   * @returns {T}
   */
  removeAt(i) {
    this.#checkBounds(i);
    const val = this.#data[i];
    for (let j = i; j < this.#size - 1; j++) this.#data[j] = this.#data[j + 1];
    this.#data[--this.#size] = undefined;
    return val;
  }

  /** @returns {T[]} */
  toArray() {
    return Array.from({ length: this.#size }, (_, i) => this.#data[i]);
  }

  /** @param {number} newCap */
  #resize(newCap) {
    const next = new Array(newCap);
    for (let i = 0; i < this.#size; i++) next[i] = this.#data[i];
    this.#data = next;
    this.#cap = newCap;
  }

  /** @param {number} i */
  #checkBounds(i) {
    if (i < 0 || i >= this.#size) throw new RangeError(`Index ${i} out of range`);
  }
}

// ══════════════════════════════════════════════
// PART 2 — CORE ALGORITHMS
// ══════════════════════════════════════════════

/**
 * Binary Search — O(log n) time, O(1) space.
 * Returns index or -1.
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */
function binarySearch(arr, target) {
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
 * @param {number[]} nums
 * @returns {number[]}
 */
function buildPrefixSum(nums) {
  const prefix = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) prefix[i + 1] = prefix[i] + nums[i];
  return prefix;
}

/**
 * Kadane's Algorithm — max contiguous subarray sum.
 * O(n) time, O(1) space.
 * @param {number[]} nums
 * @returns {number}
 */
function maxSubarrayKadane(nums) {
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
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function slidingWindowMaxSum(nums, k) {
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
 * @param {number[]} nums
 * @param {number} k
 */
function rotateRight(nums, k) {
  const n = nums.length;
  k = k % n;
  const rev = (l, r) => {
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
/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (seen.has(comp)) return [seen.get(comp), i];
    seen.set(nums[i], i);
  }
  return [];
}

/** 🟢 Best Time to Buy and Sell Stock (LC #121) — O(n) time, O(1) space */
/** @param {number[]} prices */
function bestTimeBuySell(prices) {
  let minPrice = Infinity, maxProfit = 0;
  for (const p of prices) {
    minPrice = Math.min(minPrice, p);
    maxProfit = Math.max(maxProfit, p - minPrice);
  }
  return maxProfit;
}

/** 🟢 Contains Duplicate (LC #217) — O(n) time, O(n) space */
/** @param {number[]} nums */
function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}

/** 🟢 Move Zeroes (LC #283) — O(n) time, O(1) space */
/** @param {number[]} nums */
function moveZeroes(nums) {
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
/** @param {number[]} nums */
function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);
  let prefix = 1;
  for (let i = 0; i < n; i++) { result[i] = prefix; prefix *= nums[i]; }
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) { result[i] *= suffix; suffix *= nums[i]; }
  return result;
}

/** 🟡 Maximum Subarray (LC #53) — O(n) time, O(1) space */
/** @param {number[]} nums */
function maxSubarray(nums) {
  let best = nums[0], current = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    best = Math.max(best, current);
  }
  return best;
}

/** 🟡 3Sum (LC #15) — O(n²) time, O(1) extra */
/** @param {number[]} nums */
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
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
/** @param {number[]} nums */
function maxProductSubarray(nums) {
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
/**
 * @param {number[]} nums
 * @param {number} k
 */
function subarraySumK(nums, k) {
  let count = 0, prefix = 0;
  const freq = new Map([[0, 1]]);
  for (const n of nums) {
    prefix += n;
    count += freq.get(prefix - k) ?? 0;
    freq.set(prefix, (freq.get(prefix) ?? 0) + 1);
  }
  return count;
}

/** 🟡 Container With Most Water (LC #11) — O(n) time, O(1) space */
/** @param {number[]} heights */
function containerMostWater(heights) {
  let l = 0, r = heights.length - 1, best = 0;
  while (l < r) {
    best = Math.max(best, Math.min(heights[l], heights[r]) * (r - l));
    heights[l] < heights[r] ? l++ : r--;
  }
  return best;
}

/** 🟡 Search in Rotated Sorted Array (LC #33) — O(log n) time */
/**
 * @param {number[]} nums
 * @param {number} target
 */
function searchRotated(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;
    if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && target < nums[mid]) r = mid - 1;
      else l = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[r]) l = mid + 1;
      else r = mid - 1;
    }
  }
  return -1;
}

// ── 🔴 Hard ────────────────────────────────────

/** 🔴 Trapping Rain Water (LC #42) — O(n) time, O(1) space */
/** @param {number[]} height */
function trapRainWater(height) {
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
/** @param {number[]} heights */
function largestRectangleHistogram(heights) {
  const stack = [];
  let best = 0;
  for (let i = 0; i <= heights.length; i++) {
    const h = i < heights.length ? heights[i] : 0;
    let start = i;
    while (stack.length && stack[stack.length - 1][1] > h) {
      const [left, barH] = stack.pop();
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

/**
 * @param {unknown} a
 * @param {unknown} b
 */
function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function runTests() {
  // DynamicArray
  const da = new DynamicArray();
  for (let i = 0; i < 10; i++) da.append(i);
  console.assert(da.size === 10, "size after appends");
  console.assert(da.get(0) === 0 && da.get(9) === 9, "get boundaries");
  da.insert(3, 99);
  console.assert(da.get(3) === 99 && da.size === 11, "insert");
  da.removeAt(3);
  console.assert(da.get(3) === 3 && da.size === 10, "removeAt");

  // binarySearch
  const sorted = [1, 3, 5, 7, 9, 11, 13];
  console.assert(binarySearch(sorted, 7) === 3, "bs found");
  console.assert(binarySearch(sorted, 1) === 0, "bs left boundary");
  console.assert(binarySearch(sorted, 13) === 6, "bs right boundary");
  console.assert(binarySearch(sorted, 6) === -1, "bs not found");

  // buildPrefixSum
  const p = buildPrefixSum([1, 2, 3, 4, 5]);
  console.assert(p[4] - p[1] === 9, "prefix range sum [1..3]");
  console.assert(p[5] === 15, "prefix total");

  // maxSubarrayKadane
  console.assert(maxSubarrayKadane([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6, "kadane classic");
  console.assert(maxSubarrayKadane([-1, -2, -3]) === -1, "kadane all negative");
  console.assert(maxSubarrayKadane([1]) === 1, "kadane single");

  // slidingWindowMaxSum
  console.assert(slidingWindowMaxSum([2, 1, 5, 1, 3, 2], 3) === 9, "sliding window");

  // twoSum
  console.assert(deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]), "two sum basic");
  console.assert(deepEqual(twoSum([3, 2, 4], 6), [1, 2]), "two sum non-adjacent");
  console.assert(deepEqual(twoSum([3, 3], 6), [0, 1]), "two sum duplicate");

  // bestTimeBuySell
  console.assert(bestTimeBuySell([7, 1, 5, 3, 6, 4]) === 5, "buy sell profit");
  console.assert(bestTimeBuySell([7, 6, 4, 3, 1]) === 0, "buy sell no profit");

  // productExceptSelf
  console.assert(deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]), "product except self");
  console.assert(deepEqual(productExceptSelf([0, 1]), [1, 0]), "product with zero");

  // threeSum
  const ts = threeSum([-1, 0, 1, 2, -1, -4]).map(t => [...t].sort((a, b) => a - b)).sort();
  console.assert(deepEqual(ts, [[-1, -1, 2], [-1, 0, 1]]), "three sum");
  console.assert(deepEqual(threeSum([0, 0, 0]), [[0, 0, 0]]), "three sum all zeros");
  console.assert(deepEqual(threeSum([1, 2, 3]), []), "three sum no result");

  // maxProductSubarray
  console.assert(maxProductSubarray([2, 3, -2, 4]) === 6, "max product");
  console.assert(maxProductSubarray([-2, 0, -1]) === 0, "max product with zero");
  console.assert(maxProductSubarray([-2, 3, -4]) === 24, "max product two negatives");

  // subarraySumK
  console.assert(subarraySumK([1, 1, 1], 2) === 2, "subarray sum k");
  console.assert(subarraySumK([1, 2, 3], 3) === 2, "subarray sum k overlapping");
  console.assert(subarraySumK([-1, -1, 1], 0) === 1, "subarray sum k negative");

  // containerMostWater
  console.assert(containerMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]) === 49, "container water");
  console.assert(containerMostWater([1, 1]) === 1, "container water min");

  // searchRotated
  console.assert(searchRotated([4, 5, 6, 7, 0, 1, 2], 0) === 4, "search rotated found");
  console.assert(searchRotated([4, 5, 6, 7, 0, 1, 2], 3) === -1, "search rotated not found");
  console.assert(searchRotated([1], 0) === -1, "search rotated single");

  // trapRainWater
  console.assert(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) === 6, "trap classic");
  console.assert(trapRainWater([4, 2, 0, 3, 2, 5]) === 9, "trap valley");
  console.assert(trapRainWater([3, 0, 3]) === 3, "trap symmetric");

  // largestRectangleHistogram
  console.assert(largestRectangleHistogram([2, 1, 5, 6, 2, 3]) === 10, "histogram classic");
  console.assert(largestRectangleHistogram([2, 4]) === 4, "histogram two bars");
  console.assert(largestRectangleHistogram([1]) === 1, "histogram single");

  // moveZeroes
  const mz = [0, 1, 0, 3, 12];
  moveZeroes(mz);
  console.assert(deepEqual(mz, [1, 3, 12, 0, 0]), "move zeroes");

  // rotateRight
  const rot = [1, 2, 3, 4, 5];
  rotateRight(rot, 2);
  console.assert(deepEqual(rot, [4, 5, 1, 2, 3]), "rotate right");
  const rot2 = [1, 2, 3];
  rotateRight(rot2, 4);
  console.assert(deepEqual(rot2, [3, 1, 2]), "rotate right k > n");

  console.log("✓ arrays — all tests passed");
}

runTests();
