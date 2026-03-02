/**
 * STRING ALGORITHMS  ·  TypeScript
 * KMP, Z-algorithm, Manacher + classic interview string problems.
 */

// ── Pattern Matching ──────────────────────────
function buildLPS(p: string): number[] {
  const lps = new Array(p.length).fill(0);
  let len = 0, i = 1;
  while (i < p.length) {
    if (p[i] === p[len]) { lps[i++] = ++len; }
    else if (len) { len = lps[len - 1]; }
    else { lps[i++] = 0; }
  }
  return lps;
}

function kmpSearch(text: string, pattern: string): number[] {
  if (!pattern) return [];
  const lps = buildLPS(pattern), result: number[] = [];
  let i = 0, j = 0;
  while (i < text.length) {
    if (text[i] === pattern[j]) { i++; j++; }
    if (j === pattern.length) { result.push(i - j); j = lps[j - 1]; }
    else if (i < text.length && text[i] !== pattern[j]) {
      if (j) j = lps[j - 1]; else i++;
    }
  }
  return result;
}

function zArray(s: string): number[] {
  const n = s.length, z = new Array(n).fill(0);
  z[0] = n; let l = 0, r = 0;
  for (let i = 1; i < n; i++) {
    if (i < r) z[i] = Math.min(r - i, z[i - l]);
    while (i + z[i] < n && s[z[i]] === s[i + z[i]]) z[i]++;
    if (i + z[i] > r) { l = i; r = i + z[i]; }
  }
  return z;
}

function zSearch(text: string, pattern: string): number[] {
  const s = pattern + '$' + text;
  const z = zArray(s), m = pattern.length;
  return z.map((v, i) => [v, i]).filter(([v, i]) => v === m && i > m).map(([, i]) => i - m - 1);
}

function manacher(s: string): string {
  const t = '#' + s.split('').join('#') + '#';
  const n = t.length, p = new Array(n).fill(0);
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

// ── Classic Problems ──────────────────────────
function isPalindrome(s: string): boolean {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const cnt: Record<string, number> = {};
  for (const c of s) cnt[c] = (cnt[c] ?? 0) + 1;
  for (const c of t) { if (!cnt[c]) return false; cnt[c]--; }
  return true;
}

function romanToInt(s: string): number {
  const v: Record<string, number> = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
  let result = 0;
  for (let i = 0; i < s.length; i++)
    result += v[s[i]] < (v[s[i+1]] ?? 0) ? -v[s[i]] : v[s[i]];
  return result;
}

function intToRoman(num: number): string {
  const vals: [number, string][] = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
  let res = '';
  for (const [v, s] of vals) { while (num >= v) { res += s; num -= v; } }
  return res;
}

function reverseWords(s: string): string {
  return s.trim().split(/\s+/).reverse().join(' ');
}

function zigzagConversion(s: string, numRows: number): string {
  if (numRows === 1 || numRows >= s.length) return s;
  const rows: string[] = Array(numRows).fill('');
  let row = 0, step = 1;
  for (const c of s) {
    rows[row] += c;
    if (row === 0) step = 1;
    else if (row === numRows - 1) step = -1;
    row += step;
  }
  return rows.join('');
}

function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return '';
  let prefix = strs[0];
  for (const s of strs.slice(1)) while (!s.startsWith(prefix)) prefix = prefix.slice(0, -1);
  return prefix;
}

function multiplyStrings(num1: string, num2: string): string {
  const m = num1.length, n = num2.length, pos = new Array(m + n).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul = (+num1[i]) * (+num2[j]);
      const [p1, p2] = [i + j, i + j + 1];
      const total = mul + pos[p2];
      pos[p2] = total % 10; pos[p1] += Math.floor(total / 10);
    }
  }
  return pos.join('').replace(/^0+/, '') || '0';
}

function stringCompression(chars: string[]): number {
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

function numDistinct(s: string, t: string): number {
  const n = t.length; const dp = new Array(n + 1).fill(0); dp[0] = 1;
  for (const c of s) for (let j = n; j > 0; j--) if (c === t[j-1]) dp[j] += dp[j-1];
  return dp[n];
}

// ── Tests ─────────────────────────────────────
function assert(c: boolean, m: string) { if (!c) throw new Error(`FAIL: ${m}`); }
const eq = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

function runTests() {
  console.log("Running string algorithm tests...\n");

  assert(eq(kmpSearch("abcabcabc","abc"),[0,3,6]),"kmp basic");
  assert(eq(kmpSearch("hello","ll"),[2]),"kmp single");
  console.log("  ✅ kmpSearch");

  assert(eq(zSearch("abcabcabc","abc"),[0,3,6]),"z-search");
  console.log("  ✅ zSearch");

  assert(["bab","aba"].includes(manacher("babad")),"manacher babad");
  assert(manacher("cbbd")==="bb","manacher cbbd");
  assert(manacher("racecar")==="racecar","manacher palindrome");
  console.log("  ✅ manacher");

  assert(isPalindrome("A man, a plan, a canal: Panama"),"palindrome true");
  assert(!isPalindrome("race a car"),"palindrome false");
  console.log("  ✅ isPalindrome");

  assert(isAnagram("anagram","nagaram")&&!isAnagram("rat","car"),"anagram");
  console.log("  ✅ isAnagram");

  assert(romanToInt("MCMXCIV")===1994&&romanToInt("III")===3,"romanToInt");
  console.log("  ✅ romanToInt");

  assert(intToRoman(1994)==="MCMXCIV"&&intToRoman(3)==="III","intToRoman");
  console.log("  ✅ intToRoman");

  assert(reverseWords("  the sky is blue  ")==="blue is sky the","reverseWords");
  console.log("  ✅ reverseWords");

  assert(zigzagConversion("PAYPALISHIRING",3)==="PAHNAPLSIIGYIR","zigzag 3");
  assert(zigzagConversion("PAYPALISHIRING",4)==="PINALSIGYAHRPI","zigzag 4");
  console.log("  ✅ zigzagConversion");

  assert(longestCommonPrefix(["flower","flow","flight"])==="fl","lcp");
  assert(longestCommonPrefix(["dog","racecar","car"])==="","lcp empty");
  console.log("  ✅ longestCommonPrefix");

  assert(multiplyStrings("123","456")==="56088","multiply");
  assert(multiplyStrings("0","0")==="0","multiply zero");
  console.log("  ✅ multiplyStrings");

  const chars = ['a','a','b','b','c','c','c'];
  assert(stringCompression(chars)===6,"compression");
  console.log("  ✅ stringCompression");

  assert(numDistinct("rabbbit","rabbit")===3,"numDistinct");
  assert(numDistinct("babgbag","bag")===5,"numDistinct2");
  console.log("  ✅ numDistinct");

  console.log("\n🎉 All string algorithm tests passed!");
}
runTests();
export { kmpSearch, zSearch, manacher, isPalindrome, isAnagram, romanToInt, intToRoman, reverseWords, zigzagConversion, longestCommonPrefix, multiplyStrings, stringCompression, numDistinct };
