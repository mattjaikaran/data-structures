"use strict";

/**
 * STRING ALGORITHMS  ·  JavaScript
 * KMP, Z-algorithm, Manacher + classic interview string problems.
 * Vanilla JS with JSDoc type annotations.
 */

// ┌─────────────────────────────────────────────┐
// │ TABLE OF CONTENTS                           │
// ├─────────────────────────────────────────────┤
// │ 1. Pattern Matching                         │
// │    - buildLPS, kmpSearch                     │
// │    - zArray, zSearch                        │
// │    - manacher                               │
// │ 2. Classic String Problems                   │
// │    - isPalindrome, isAnagram        (🟢)     │
// │    - romanToInt, intToRoman         (🟢/🟡)  │
// │    - reverseWords, zigzagConversion (🟡)     │
// │    - longestCommonPrefix, multiplyStrings(🟢/🟡)│
// │    - stringCompression, numDistinct (🟡/🔴)  │
// │ 3. Tests                                    │
// └─────────────────────────────────────────────┘

// ══════════════════════════════════════════════
// PART 1 — PATTERN MATCHING
// ══════════════════════════════════════════════

// ── Pattern Matching ──────────────────────────

/** @param {string} p */
function buildLPS(p) {
  const lps = new Array(p.length).fill(0);
  let len = 0, i = 1;
  while (i < p.length) {
    if (p[i] === p[len]) { lps[i++] = ++len; }
    else if (len) { len = lps[len - 1]; }
    else { lps[i++] = 0; }
  }
  return lps;
}

/**
 * @param {string} text
 * @param {string} pattern
 * @returns {number[]}
 */
function kmpSearch(text, pattern) {
  if (!pattern) return [];
  const lps = buildLPS(pattern);
  const result = [];
  let i = 0, j = 0;
  while (i < text.length) {
    if (text[i] === pattern[j]) { i++; j++; }
    if (j === pattern.length) { result.push(i - j); j = lps[j - 1]; }
    else if (i < text.length && text[i] !== pattern[j]) {
      if (j) j = lps[j - 1];
      else i++;
    }
  }
  return result;
}

/** @param {string} s */
function zArray(s) {
  const n = s.length;
  const z = new Array(n).fill(0);
  z[0] = n;
  let l = 0, r = 0;
  for (let i = 1; i < n; i++) {
    if (i < r) z[i] = Math.min(r - i, z[i - l]);
    while (i + z[i] < n && s[z[i]] === s[i + z[i]]) z[i]++;
    if (i + z[i] > r) { l = i; r = i + z[i]; }
  }
  return z;
}

/**
 * @param {string} text
 * @param {string} pattern
 * @returns {number[]}
 */
function zSearch(text, pattern) {
  const s = pattern + "$" + text;
  const z = zArray(s);
  const m = pattern.length;
  return z.map((v, i) => [v, i]).filter(([v, i]) => v === m && i > m).map(([, i]) => i - m - 1);
}

/** @param {string} s */
function manacher(s) {
  const t = "#" + s.split("").join("#") + "#";
  const n = t.length;
  const p = new Array(n).fill(0);
  let c = 0, r = 0;
  for (let i = 0; i < n; i++) {
    if (i < r) p[i] = Math.min(r - i, p[2 * c - i]);
    while (i + p[i] + 1 < n && i - p[i] - 1 >= 0 && t[i + p[i] + 1] === t[i - p[i] - 1]) p[i]++;
    if (i + p[i] > r) { c = i; r = i + p[i]; }
  }
  const center = p.indexOf(Math.max(...p));
  const start = (center - p[center]) / 2;
  return s.slice(start, start + p[center]);
}

// ══════════════════════════════════════════════
// PART 2 — CLASSIC STRING PROBLEMS
// ══════════════════════════════════════════════

// ── Classic Problems ──────────────────────────

/** 🟢 Valid Palindrome (LC #125) — alphanumeric only */
/** @param {string} s */
function isPalindrome(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}

/**
 * @param {string} s
 * @param {string} t
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const cnt = {};
  for (const c of s) cnt[c] = (cnt[c] ?? 0) + 1;
  for (const c of t) {
    if (!cnt[c]) return false;
    cnt[c]--;
  }
  return true;
}

/** @param {string} s */
function romanToInt(s) {
  const v = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  for (let i = 0; i < s.length; i++)
    result += v[s[i]] < (v[s[i + 1]] ?? 0) ? -v[s[i]] : v[s[i]];
  return result;
}

/** @param {number} num */
function intToRoman(num) {
  const vals = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
  let res = "";
  for (const [v, s] of vals) { while (num >= v) { res += s; num -= v; } }
  return res;
}

/** 🟡 Reverse Words in a String (LC #151) */
/** @param {string} s */
function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(" ");
}

/** 🟡 Zigzag Conversion (LC #6) */
/**
 * @param {string} s
 * @param {number} numRows
 */
function zigzagConversion(s, numRows) {
  if (numRows === 1 || numRows >= s.length) return s;
  const rows = Array(numRows).fill("");
  let row = 0, step = 1;
  for (const c of s) {
    rows[row] += c;
    if (row === 0) step = 1;
    else if (row === numRows - 1) step = -1;
    row += step;
  }
  return rows.join("");
}

/** 🟢 Longest Common Prefix (LC #14) */
/** @param {string[]} strs */
function longestCommonPrefix(strs) {
  if (!strs.length) return "";
  let prefix = strs[0];
  for (const s of strs.slice(1)) while (!s.startsWith(prefix)) prefix = prefix.slice(0, -1);
  return prefix;
}

/** 🟡 Multiply Strings (LC #43) — no int() conversion */
/**
 * @param {string} num1
 * @param {string} num2
 */
function multiplyStrings(num1, num2) {
  const m = num1.length, n = num2.length;
  const pos = new Array(m + n).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul = (+num1[i]) * (+num2[j]);
      const [p1, p2] = [i + j, i + j + 1];
      const total = mul + pos[p2];
      pos[p2] = total % 10;
      pos[p1] += Math.floor(total / 10);
    }
  }
  return pos.join("").replace(/^0+/, "") || "0";
}

/** 🟡 String Compression (LC #443) — in-place */
/** @param {string[]} chars */
function stringCompression(chars) {
  let write = 0, anchor = 0;
  for (let read = 0; read < chars.length; read++) {
    if (read + 1 === chars.length || chars[read + 1] !== chars[read]) {
      chars[write++] = chars[anchor];
      const count = read - anchor + 1;
      if (count > 1) for (const c of String(count)) chars[write++] = c;
      anchor = read + 1;
    }
  }
  return write;
}

/** 🔴 Distinct Subsequences (LC #115) */
/**
 * @param {string} s
 * @param {string} t
 */
function numDistinct(s, t) {
  const n = t.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (const c of s) for (let j = n; j > 0; j--) if (c === t[j - 1]) dp[j] += dp[j - 1];
  return dp[n];
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
  console.assert(eq(kmpSearch("abcabcabc", "abc"), [0, 3, 6]), "kmp basic");
  console.assert(eq(kmpSearch("hello", "ll"), [2]), "kmp single");

  console.assert(eq(zSearch("abcabcabc", "abc"), [0, 3, 6]), "z-search");

  console.assert(["bab", "aba"].includes(manacher("babad")), "manacher babad");
  console.assert(manacher("cbbd") === "bb", "manacher cbbd");
  console.assert(manacher("racecar") === "racecar", "manacher palindrome");

  console.assert(isPalindrome("A man, a plan, a canal: Panama"), "palindrome true");
  console.assert(!isPalindrome("race a car"), "palindrome false");

  console.assert(isAnagram("anagram", "nagaram") && !isAnagram("rat", "car"), "anagram");

  console.assert(romanToInt("MCMXCIV") === 1994 && romanToInt("III") === 3, "romanToInt");

  console.assert(intToRoman(1994) === "MCMXCIV" && intToRoman(3) === "III", "intToRoman");

  console.assert(reverseWords("  the sky is blue  ") === "blue is sky the", "reverseWords");

  console.assert(zigzagConversion("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR", "zigzag 3");
  console.assert(zigzagConversion("PAYPALISHIRING", 4) === "PINALSIGYAHRPI", "zigzag 4");

  console.assert(longestCommonPrefix(["flower", "flow", "flight"]) === "fl", "lcp");
  console.assert(longestCommonPrefix(["dog", "racecar", "car"]) === "", "lcp empty");

  console.assert(multiplyStrings("123", "456") === "56088", "multiply");
  console.assert(multiplyStrings("0", "0") === "0", "multiply zero");

  const chars = ["a", "a", "b", "b", "c", "c", "c"];
  console.assert(stringCompression(chars) === 6, "compression");

  console.assert(numDistinct("rabbbit", "rabbit") === 3, "numDistinct");
  console.assert(numDistinct("babgbag", "bag") === 5, "numDistinct2");

  console.log("✓ strings — all tests passed");
}

runTests();
