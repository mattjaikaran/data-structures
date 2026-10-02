/** 🟢 Backspace String Compare (LC #844)
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
export function backspaceCompare(s, t) {
  const process = (str) => {
    const stack = [];
    for (const ch of str) {
      if (ch !== "#") stack.push(ch);
      else stack.pop();
    }
    return stack.join("");
  };
  return process(s) === process(t);
}
