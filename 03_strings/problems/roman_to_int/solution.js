/** @param {string} s */
export function romanToInt(s) {
  const v = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  for (let i = 0; i < s.length; i++)
    result += v[s[i]] < (v[s[i + 1]] ?? 0) ? -v[s[i]] : v[s[i]];
  return result;
}
