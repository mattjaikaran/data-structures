/**
 * 🟡 letterCombinations (LC #17)
 * @param {string} digits
 * @returns {string[]}
 */
export function letterCombinations(digits) {
  if (!digits) return [];
  const phone = {2:'abc',3:'def',4:'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'};
  const result = [];
  const bt = (i, path) => {
    if (i === digits.length) { result.push(path.join('')); return; }
    for (const c of phone[digits[i]]) { path.push(c); bt(i+1,path); path.pop(); }
  };
  bt(0, []); return result;
}
