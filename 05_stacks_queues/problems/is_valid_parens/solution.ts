/** 🟢 Valid Parentheses (LC #20) */
export function isValidParens(s: string): boolean {
  const stack: string[] = [];
  const match: Record<string, string> = { ')': '(', '}': '{', ']': '[' };
  for (const ch of s) {
    if ('({['.includes(ch)) stack.push(ch);
    else if (!stack.length || stack[stack.length - 1] !== match[ch]) return false;
    else stack.pop();
  }
  return stack.length === 0;
}
