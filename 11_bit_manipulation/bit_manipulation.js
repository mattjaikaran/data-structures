"use strict";
/**
 * BIT MANIPULATION  ·  JavaScript
 */

// ┌─────────────────────────────────────────────┐
// │ TABLE OF CONTENTS                           │
// ├─────────────────────────────────────────────┤
// │ 1. Core Bit Operations                      │
// │    - getBit, setBit, clearBit, toggleBit    │
// │    - isPowerOfTwo, countBits                │
// │ 2. Interview Problems                       │
// │    - singleNumber                (LC #136) 🟢│
// │    - singleNumberII              (LC #137) 🟡│
// │    - singleNumberIII             (LC #260) 🟡│
// │    - reverseBits                 (LC #190) 🟢│
// │    - missingNumber               (LC #268) 🟢│
// │    - countBitsRange              (LC #338) 🟢│
// │    - hammingDistance             (LC #461) 🟢│
// │    - totalHammingDistance        (LC #477) 🟡│
// │    - bitwiseAndRange             (LC #201) 🟡│
// │    - powerOfFour                 (LC #342) 🟢│
// │    - subsetsFromMask              (LC #78) 🟡│
// │    - maximumXOR                  (LC #421) 🟡│
// │ 3. Tests                                    │
// └─────────────────────────────────────────────┘

// ══════════════════════════════════════
// ── Core Bit Operations ──────────────────────
// ══════════════════════════════════════

/**
 * @param {number} n
 * @param {number} i
 * @returns {number}
 */
const getBit = (n, i) => (n >> i) & 1;

/**
 * @param {number} n
 * @param {number} i
 * @returns {number}
 */
const setBit = (n, i) => n | (1 << i);

/**
 * @param {number} n
 * @param {number} i
 * @returns {number}
 */
const clearBit = (n, i) => n & ~(1 << i);

/**
 * @param {number} n
 * @param {number} i
 * @returns {number}
 */
const toggleBit = (n, i) => n ^ (1 << i);

/**
 * @param {number} n
 * @returns {boolean}
 */
const isPowerOfTwo = (n) => n > 0 && (n & (n - 1)) === 0;

/**
 * @param {number} n
 * @returns {number}
 */
const countBits = (n) => {
  let c = 0;
  while (n) {
    n &= n - 1;
    c++;
  }
  return c;
};

// ══════════════════════════════════════
// ── Interview Problems ──────────────────────
// ══════════════════════════════════════

/**
 * 🟢 Single Number (LC #136) — XOR all, pairs cancel
 * @param {number[]} nums
 * @returns {number}
 */
const singleNumber = (nums) => nums.reduce((a, b) => a ^ b, 0);

/**
 * 🟡 Single Number II (LC #137) — count each bit mod 3
 * @param {number[]} nums
 * @returns {number}
 */
const singleNumberII = (nums) => {
  let [ones, twos] = [0, 0];
  for (const n of nums) {
    ones = (ones ^ n) & ~twos;
    twos = (twos ^ n) & ~ones;
  }
  return ones;
};

/**
 * 🟡 Single Number III (LC #260) — two uniques, split by diff bit
 * @param {number[]} nums
 * @returns {[number, number]}
 */
const singleNumberIII = (nums) => {
  const xor = nums.reduce((a, b) => a ^ b, 0);
  const diff = xor & -xor;
  let [a, b] = [0, 0];
  for (const n of nums) {
    if (n & diff) a ^= n;
    else b ^= n;
  }
  return [a, b];
};

/**
 * 🟢 Reverse Bits (LC #190) — reverse 32-bit unsigned integer
 * @param {number} n
 * @returns {number}
 */
const reverseBits = (n) => {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res = (res << 1) | (n & 1);
    n >>>= 1;
  }
  return res >>> 0;
};

/**
 * 🟢 Missing Number (LC #268) — XOR indices and values
 * @param {number[]} nums
 * @returns {number}
 */
const missingNumber = (nums) => {
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) res ^= i ^ nums[i];
  return res;
};

/**
 * 🟢 Counting Bits (LC #338) — dp[i] = dp[i>>1] + (i&1)
 * @param {number} n
 * @returns {number[]}
 */
const countBitsRange = (n) => {
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) dp[i] = dp[i >> 1] + (i & 1);
  return dp;
};

/**
 * 🟢 Hamming Distance (LC #461) — count positions where bits differ
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
const hammingDistance = (x, y) => countBits(x ^ y);

/**
 * 🟡 Total Hamming Distance (LC #477) — ones*zeros per bit
 * @param {number[]} nums
 * @returns {number}
 */
const totalHammingDistance = (nums) => {
  let total = 0;
  for (let bit = 0; bit < 32; bit++) {
    const ones = nums.filter((n) => (n >> bit) & 1).length;
    total += ones * (nums.length - ones);
  }
  return total;
};

/**
 * 🟡 Bitwise AND of Numbers Range (LC #201) — common prefix
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
const bitwiseAndRange = (left, right) => {
  let shift = 0;
  while (left !== right) {
    left >>= 1;
    right >>= 1;
    shift++;
  }
  return left << shift;
};

/**
 * 🟢 Power of Four (LC #342) — power of 2, set bit at even position
 * @param {number} n
 * @returns {boolean}
 */
const powerOfFour = (n) => n > 0 && (n & (n - 1)) === 0 && (n & 0x55555555) !== 0;

/**
 * 🟡 Subsets (LC #78) — bitmask to enumerate 2^n subsets
 * @param {number[]} nums
 * @returns {number[][]}
 */
const subsetsFromMask = (nums) =>
  Array.from({ length: 1 << nums.length }, (_, mask) => nums.filter((_, i) => (mask >> i) & 1));

/**
 * 🟡 Maximum XOR of Two Numbers (LC #421) — bit-by-bit greedy
 * @param {number[]} nums
 * @returns {number}
 */
const maximumXOR = (nums) => {
  let [maxXor, prefix] = [0, 0];
  for (let i = 31; i >= 0; i--) {
    prefix |= 1 << i;
    const prefixes = new Set(nums.map((n) => n & prefix));
    const candidate = maxXor | (1 << i);
    if ([...prefixes].some((p) => prefixes.has(candidate ^ p))) maxXor = candidate;
  }
  return maxXor;
};

// ══════════════════════════════════════
// ── Tests ──────────────────────
// ══════════════════════════════════════

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function runTests() {
  console.assert(getBit(0b1010, 1) === 1 && getBit(0b1010, 0) === 0, "getBit");
  console.assert(setBit(0b1010, 0) === 0b1011, "setBit");
  console.assert(clearBit(0b1011, 0) === 0b1010, "clearBit");
  console.assert(toggleBit(0b1010, 0) === 0b1011, "toggle");

  console.assert(isPowerOfTwo(16) && isPowerOfTwo(1) && !isPowerOfTwo(6), "pow2");

  console.assert(countBits(0b1011) === 3 && countBits(0) === 0, "countBits");

  console.assert(singleNumber([4, 1, 2, 1, 2]) === 4, "singleNum");

  console.assert(singleNumberII([2, 2, 3, 2]) === 3 && singleNumberII([0, 1, 0, 1, 0, 1, 99]) === 99, "singleII");

  const [a, b] = singleNumberIII([1, 2, 1, 3, 2, 5]);
  console.assert(new Set([a, b]).has(3) && new Set([a, b]).has(5), "singleIII");

  console.assert(reverseBits(43261596) === 964176192, "reverseBits");

  console.assert(missingNumber([3, 0, 1]) === 2 && missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) === 8, "missing");

  console.assert(eq(countBitsRange(5), [0, 1, 1, 2, 1, 2]), "countRange");

  console.assert(hammingDistance(1, 4) === 2 && hammingDistance(3, 1) === 1, "hamming");

  console.assert(totalHammingDistance([4, 14, 2]) === 6, "totalHamming");

  console.assert(bitwiseAndRange(5, 7) === 4 && bitwiseAndRange(1, 2147483647) === 0, "andRange");

  console.assert(powerOfFour(16) && !powerOfFour(8), "pow4");

  const subs = subsetsFromMask([1, 2, 3]);
  console.assert(subs.length === 8, "subsets");

  console.assert(maximumXOR([3, 10, 5, 25, 2, 8]) === 28, "maxXor");

  console.log("✓ bit_manipulation — all tests passed");
}

runTests();
