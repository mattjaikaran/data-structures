/** @param {string} p */
export function buildLPS(p) {
  const lps = new Array(p.length).fill(0);
  let len = 0, i = 1;
  while (i < p.length) {
    if (p[i] === p[len]) { lps[i++] = ++len; }
    else if (len) { len = lps[len - 1]; }
    else { lps[i++] = 0; }
  }
  return lps;
}

/**
 * @param {string} text
 * @param {string} pattern
 * @returns {number[]}
 */
export function kmpSearch(text, pattern) {
  if (!pattern) return [];
  const lps = buildLPS(pattern);
  const result = [];
  let i = 0, j = 0;
  while (i < text.length) {
    if (text[i] === pattern[j]) { i++; j++; }
    if (j === pattern.length) { result.push(i - j); j = lps[j - 1]; }
    else if (i < text.length && text[i] !== pattern[j]) {
      if (j) j = lps[j - 1];
      else i++;
    }
  }
  return result;
}
