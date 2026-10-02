/** 🟡 Generate Parentheses (LC #22) */
export function generateParentheses(n: number): string[] {
  const result: string[] = [];
  const bt = (cur: string, op: number, cl: number): void => {
    if (cur.length === 2 * n) { result.push(cur); return; }
    if (op < n) bt(cur + '(', op + 1, cl);
    if (cl < op) bt(cur + ')', op, cl + 1);
  };
  bt('', 0, 0);
  return result;
}
