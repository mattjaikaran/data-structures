function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { decodeString } from '../../problems/decode_string/solution.ts';



assert(decodeString("3[a2[c]]") === "accaccacc", "decode nested");
assert(decodeString("3[a]2[bc]") === "aaabcbc", "decode basic");
console.log('PASS 05_stacks_queues/decode_string (ts)');
