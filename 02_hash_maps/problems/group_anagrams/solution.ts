export function groupAnagrams(strs: string[]): string[][] {
  const m = new Map<string,string[]>();
  for (const s of strs) { const k=[...s].sort().join(''); if(!m.has(k))m.set(k,[]); m.get(k)!.push(s); }
  return [...m.values()];
}
