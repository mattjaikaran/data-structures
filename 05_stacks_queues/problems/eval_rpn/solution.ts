/** 🟡 Evaluate Reverse Polish Notation (LC #150) */
export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  for (const t of tokens) {
    if (['+','-','*','/'].includes(t)) {
      const b = stack.pop()!, a = stack.pop()!;
      if (t === '+') stack.push(a + b);
      else if (t === '-') stack.push(a - b);
      else if (t === '*') stack.push(a * b);
      else stack.push(Math.trunc(a / b));
    } else stack.push(parseInt(t));
  }
  return stack[0];
}
