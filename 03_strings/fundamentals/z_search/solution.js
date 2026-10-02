/** @param {string} s */
export function zArray(s) {
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
export function zSearch(text, pattern) {
  const s = pattern + "$" + text;
  const z = zArray(s);
  const m = pattern.length;
  return z.map((v, i) => [v, i]).filter(([v, i]) => v === m && i > m).map(([, i]) => i - m - 1);
}
