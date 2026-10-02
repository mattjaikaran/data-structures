/** 🟡 Decode String (LC #394)
 * @param {string} s
 * @returns {string}
 */
export function decodeString(s) {
  const countStack = [],
    strStack = [];
  let cur = "",
    k = 0;
  for (const ch of s) {
    if (!isNaN(parseInt(ch, 10))) {
      k = k * 10 + parseInt(ch, 10);
    } else if (ch === "[") {
      countStack.push(k);
      strStack.push(cur);
      cur = "";
      k = 0;
    } else if (ch === "]") {
      cur = strStack.pop() + cur.repeat(countStack.pop());
    } else {
      cur += ch;
    }
  }
  return cur;
}
