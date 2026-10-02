function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { generateParentheses } from '../../problems/generate_parentheses/solution.ts';

function deepEq(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(deepEq(generateParentheses(1), ["()"]), "gen parens n=1");
assert(generateParentheses(3).length === 5, "gen parens n=3 count");
console.log('PASS 05_stacks_queues/generate_parentheses (ts)');
