export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const cnt: Record<string, number> = {};
  for (const c of s) cnt[c] = (cnt[c] ?? 0) + 1;
  for (const c of t) { if (!cnt[c]) return false; cnt[c]--; }
  return true;
}
