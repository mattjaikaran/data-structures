/** @param {string} s */
export function manacher(s) {
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
