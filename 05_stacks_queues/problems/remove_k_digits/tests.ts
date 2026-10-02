function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { removeKDigits } from '../../problems/remove_k_digits/solution.ts';



assert(removeKDigits("1432219", 3) === "1219", "remove k 1");
assert(removeKDigits("10200", 1) === "200", "remove k 2");
assert(removeKDigits("10", 2) === "0", "remove k 3");
console.log('PASS 05_stacks_queues/remove_k_digits (ts)');
