/**
 * @param {string} s
 * @param {string} t
 */
export function isIsomorphic(s, t) {
  const st = new Map(), ts = new Map();
  for (let i = 0; i < s.length; i++) {
    if ((st.get(s[i]) ?? t[i]) !== t[i] || (ts.get(t[i]) ?? s[i]) !== s[i]) return false;
    st.set(s[i], t[i]);
    ts.set(t[i], s[i]);
  }
  return true;
}
