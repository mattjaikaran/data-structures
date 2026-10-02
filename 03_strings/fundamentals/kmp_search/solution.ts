export function buildLPS(p: string): number[] {
  const lps = new Array(p.length).fill(0);
  let len = 0, i = 1;
  while (i < p.length) {
    if (p[i] === p[len]) { lps[i++] = ++len; }
    else if (len) { len = lps[len - 1]; }
    else { lps[i++] = 0; }
  }
  return lps;
}

export function kmpSearch(text: string, pattern: string): number[] {
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
