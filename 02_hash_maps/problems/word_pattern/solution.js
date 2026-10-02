/**
 * @param {string} pattern
 * @param {string} s
 */
export function wordPattern(pattern, s) {
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
