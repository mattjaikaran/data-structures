export function zArray(s: string): number[] {
  const n = s.length, z = new Array(n).fill(0);
  z[0] = n; let l = 0, r = 0;
  for (let i = 1; i < n; i++) {
    if (i < r) z[i] = Math.min(r - i, z[i - l]);
    while (i + z[i] < n && s[z[i]] === s[i + z[i]]) z[i]++;
    if (i + z[i] > r) { l = i; r = i + z[i]; }
  }
  return z;
}

export function zSearch(text: string, pattern: string): number[] {
  const s = pattern + '$' + text;
  const z = zArray(s), m = pattern.length;
  return z.map((v, i) => [v, i]).filter(([v, i]) => v === m && i > m).map(([, i]) => i - m - 1);
}
