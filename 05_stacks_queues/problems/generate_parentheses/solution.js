/** 🟡 Generate Parentheses (LC #22)
 * @param {number} n
 * @returns {string[]}
 */
export function generateParentheses(n) {
  const result = [];
  const bt = (cur, op, cl) => {
    if (cur.length === 2 * n) {
      result.push(cur);
      return;
    }
    if (op < n) bt(cur + "(", op + 1, cl);
    if (cl < op) bt(cur + ")", op, cl + 1);
  };
  bt("", 0, 0);
  return result;
}
