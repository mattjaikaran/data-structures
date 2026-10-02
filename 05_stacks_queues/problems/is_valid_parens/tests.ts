function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { isValidParens } from '../../problems/is_valid_parens/solution.ts';



assert(isValidParens("()[]{}"), "valid parens 1");
assert(isValidParens("([])"), "valid parens 2");
assert(!isValidParens("(]"), "invalid parens 1");
assert(isValidParens(""), "empty parens");
console.log('PASS 05_stacks_queues/is_valid_parens (ts)');
