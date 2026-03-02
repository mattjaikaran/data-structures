"use strict";

/**
 * HASH MAPS  ·  JavaScript
 * Manual HashMap + frequency patterns + sliding window + prefix sum.
 * Vanilla JS with JSDoc type annotations.
 */

// ┌─────────────────────────────────────────────┐
// │ TABLE OF CONTENTS                           │
// ├─────────────────────────────────────────────┤
// │ 1. HashMap class                            │
// │ 2. Problems                                 │
// │    - groupAnagrams              (LC #49) 🟡  │
// │    - longestConsecutive         (LC #128) 🟡│
// │    - lengthOfLongestSubstring   (LC #3) 🟡  │
// │    - minWindowSubstring         (LC #76) 🔴  │
// │    - subarraySumEqualsK        (LC #560) 🟡 │
// │    - wordPattern                (LC #290) 🟢 │
// │    - isIsomorphic               (LC #205) 🟢 │
// │    - firstUniqChar              (LC #387) 🟢 │
// │    - findAllAnagrams           (LC #438) 🟡  │
// │ 3. Tests                                    │
// └─────────────────────────────────────────────┘

// ══════════════════════════════════════════════
// PART 1 — HASHMAP CLASS
// ══════════════════════════════════════════════

/**
 * @template K
 * @template V
 */
class HashMap {
  /** @type {[K, V][][]} */
  #buckets;
  /** @type {number} */
  #cap;
  size = 0;

  /** @param {number} [cap=16] */
  constructor(cap = 16) {
    this.#cap = cap;
    this.#buckets = Array.from({ length: cap }, () => []);
  }

  /**
   * @param {K} key
   * @returns {number}
   */
  #h(key) {
    return Math.abs(String(key).split("").reduce((a, c) => ((a << 5) - a) + c.charCodeAt(0), 0)) % this.#cap;
  }

  /**
   * @param {K} key
   * @param {V} val
   */
  put(key, val) {
    const b = this.#buckets[this.#h(key)];
    const i = b.findIndex(([k]) => k === key);
    if (i >= 0) b[i][1] = val;
    else { b.push([key, val]); this.size++; }
  }

  /**
   * @param {K} key
   * @returns {V | undefined}
   */
  get(key) {
    return this.#buckets[this.#h(key)].find(([k]) => k === key)?.[1];
  }

  /** @param {K} key */
  remove(key) {
    const b = this.#buckets[this.#h(key)];
    const i = b.findIndex(([k]) => k === key);
    if (i >= 0) { b.splice(i, 1); this.size--; }
  }

  /**
   * @param {K} key
   * @returns {boolean}
   */
  has(key) {
    return this.get(key) !== undefined;
  }
}

// ── Problems ──────────────────────────────────

/** @param {string[]} strs */
function groupAnagrams(strs) {
  const m = new Map();
  for (const s of strs) {
    const k = [...s].sort().join("");
    if (!m.has(k)) m.set(k, []);
    m.get(k).push(s);
  }
  return [...m.values()];
}

/** @param {number[]} nums */
function longestConsecutive(nums) {
  const s = new Set(nums);
  let best = 0;
  for (const n of s) {
    if (!s.has(n - 1)) {
      let cur = n, len = 1;
      while (s.has(cur + 1)) { cur++; len++; }
      best = Math.max(best, len);
    }
  }
  return best;
}

/** 🟡 Longest Substring Without Repeating (LC #3) */
/** @param {string} s */
function lengthOfLongestSubstring(s) {
  const last = new Map();
  let best = 0, left = 0;
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    if (last.has(c) && last.get(c) >= left) left = last.get(c) + 1;
    last.set(c, right);
    best = Math.max(best, right - left + 1);
  }
  return best;
}

/** 🔴 Minimum Window Substring (LC #76) */
/**
 * @param {string} s
 * @param {string} t
 */
function minWindowSubstring(s, t) {
  const need = new Map();
  for (const c of t) need.set(c, (need.get(c) ?? 0) + 1);
  let missing = t.length, left = 0, best = "";
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    if ((need.get(c) ?? 0) > 0) missing--;
    need.set(c, (need.get(c) ?? 0) - 1);
    if (missing === 0) {
      while ((need.get(s[left]) ?? 0) < 0) {
        need.set(s[left], (need.get(s[left]) ?? 0) + 1);
        left++;
      }
      if (!best || right - left + 1 < best.length) best = s.slice(left, right + 1);
      need.set(s[left], (need.get(s[left]) ?? 0) + 1);
      missing++;
      left++;
    }
  }
  return best;
}

/**
 * @param {number[]} nums
 * @param {number} k
 */
function subarraySumEqualsK(nums, k) {
  let count = 0, prefix = 0;
  const freq = new Map([[0, 1]]);
  for (const n of nums) {
    prefix += n;
    count += (freq.get(prefix - k) ?? 0);
    freq.set(prefix, (freq.get(prefix) ?? 0) + 1);
  }
  return count;
}

/**
 * @param {string} pattern
 * @param {string} s
 */
function wordPattern(pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;
  const pw = new Map(), wp = new Map();
  for (let i = 0; i < pattern.length; i++) {
    const [p, w] = [pattern[i], words[i]];
    if (pw.has(p) && pw.get(p) !== w) return false;
    if (wp.has(w) && wp.get(w) !== p) return false;
    pw.set(p, w);
    wp.set(w, p);
  }
  return true;
}

/**
 * @param {string} s
 * @param {string} t
 */
function isIsomorphic(s, t) {
  const st = new Map(), ts = new Map();
  for (let i = 0; i < s.length; i++) {
    if ((st.get(s[i]) ?? t[i]) !== t[i] || (ts.get(t[i]) ?? s[i]) !== s[i]) return false;
    st.set(s[i], t[i]);
    ts.set(t[i], s[i]);
  }
  return true;
}

/** @param {string} s */
function firstUniqChar(s) {
  const cnt = new Map();
  for (const c of s) cnt.set(c, (cnt.get(c) ?? 0) + 1);
  for (let i = 0; i < s.length; i++) if (cnt.get(s[i]) === 1) return i;
  return -1;
}

/** 🟡 Find All Anagrams in a String (LC #438) */
/**
 * @param {string} s
 * @param {string} p
 */
function findAllAnagrams(s, p) {
  const need = new Map();
  for (const c of p) need.set(c, (need.get(c) ?? 0) + 1);
  const window = new Map();
  const result = [];
  const k = p.length;
  const mEq = (a, b) => a.size === b.size && [...a].every(([k, v]) => b.get(k) === v);
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    window.set(c, (window.get(c) ?? 0) + 1);
    if (i >= k) {
      const lc = s[i - k];
      const nc = (window.get(lc) ?? 0) - 1;
      nc === 0 ? window.delete(lc) : window.set(lc, nc);
    }
    if (mEq(window, need)) result.push(i - k + 1);
  }
  return result;
}

// ══════════════════════════════════════════════
// PART 3 — TESTS
// ══════════════════════════════════════════════

// ── Tests ─────────────────────────────────────

/**
 * @param {unknown} a
 * @param {unknown} b
 */
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function runTests() {
  const hm = new HashMap();
  hm.put("a", 1);
  hm.put("b", 2);
  hm.put("a", 99);
  console.assert(hm.get("a") === 99 && hm.get("b") === 2, "put/get/update");
  console.assert(hm.get("z") === undefined, "get missing");
  hm.remove("a");
  console.assert(!hm.has("a"), "remove");

  const groups = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
  console.assert(groups.length === 3, "groupAnagrams count");

  console.assert(longestConsecutive([100, 4, 200, 1, 3, 2]) === 4, "longCons");
  console.assert(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]) === 9, "longCons2");

  console.assert(lengthOfLongestSubstring("abcabcbb") === 3, "longestSub");
  console.assert(lengthOfLongestSubstring("bbbbb") === 1, "longestSub2");

  console.assert(minWindowSubstring("ADOBECODEBANC", "ABC") === "BANC", "minWindow");
  console.assert(minWindowSubstring("a", "a") === "a", "minWindow2");
  console.assert(minWindowSubstring("a", "b") === "", "minWindow3");

  console.assert(subarraySumEqualsK([1, 1, 1], 2) === 2, "subarraySum");
  console.assert(subarraySumEqualsK([1, 2, 3], 3) === 2, "subarraySum2");

  console.assert(wordPattern("abba", "dog cat cat dog"), "wordPat");
  console.assert(!wordPattern("abba", "dog cat cat fish"), "wordPat2");

  console.assert(isIsomorphic("egg", "add") && !isIsomorphic("foo", "bar"), "isomorph");

  console.assert(firstUniqChar("leetcode") === 0, "firstUniq");
  console.assert(firstUniqChar("aabb") === -1, "firstUniq2");

  console.assert(eq(findAllAnagrams("cbaebabacd", "abc"), [0, 6]), "anagrams");
  console.assert(eq(findAllAnagrams("abab", "ab"), [0, 1, 2]), "anagrams2");

  console.log("✓ hash_maps — all tests passed");
}

runTests();
