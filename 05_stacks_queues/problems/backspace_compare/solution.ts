/** 🟢 Backspace String Compare (LC #844) */
export function backspaceCompare(s: string, t: string): boolean {
  const process = (str: string): string => {
    const stack: string[] = [];
    for (const ch of str) { if (ch !== '#') stack.push(ch); else stack.pop(); }
    return stack.join('');
  };
  return process(s) === process(t);
}
