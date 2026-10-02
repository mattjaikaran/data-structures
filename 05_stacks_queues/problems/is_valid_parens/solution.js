/** 🟢 Valid Parentheses (LC #20)
 * @param {string} s
 * @returns {boolean}
 */
export function isValidParens(s) {
  const stack = [];
  const match = { ")": "(", "}": "{", "]": "[" };
  for (const ch of s) {
    if ("({[".includes(ch)) stack.push(ch);
    else if (!stack.length || stack[stack.length - 1] !== match[ch]) return false;
    else stack.pop();
  }
  return stack.length === 0;
}
