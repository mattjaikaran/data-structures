/** @param {string[]} strs */
export function groupAnagrams(strs) {
  const m = new Map();
  for (const s of strs) {
    const k = [...s].sort().join("");
    if (!m.has(k)) m.set(k, []);
    m.get(k).push(s);
  }
  return [...m.values()];
}
