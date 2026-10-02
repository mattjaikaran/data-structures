/**
 * 🟡 palindromePartitioning (LC #131)
 * @param {string} s
 * @returns {string[][]}
 */
export function palindromePartitioning(s) {
  const result = [];
  const isPal = (sub) => sub === sub.split('').reverse().join('');
  const bt = (start, path) => {
    if (start === s.length) { result.push([...path]); return; }
    for (let end = start+1; end <= s.length; end++) {
      const sub = s.slice(start,end);
      if (isPal(sub)) { path.push(sub); bt(end,path); path.pop(); }
    }
  };
  bt(0, []); return result;
}
