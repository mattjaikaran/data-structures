/**
 * @param {string} s
 * @param {string} t
 */
export function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const cnt = {};
  for (const c of s) cnt[c] = (cnt[c] ?? 0) + 1;
  for (const c of t) {
    if (!cnt[c]) return false;
    cnt[c]--;
  }
  return true;
}
