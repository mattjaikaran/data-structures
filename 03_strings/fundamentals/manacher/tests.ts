function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { manacher } from '../../fundamentals/manacher/solution.ts';



assert(["bab","aba"].includes(manacher("babad")),"manacher babad");
assert(manacher("cbbd")==="bb","manacher cbbd");
assert(manacher("racecar")==="racecar","manacher palindrome");
console.log('PASS 03_strings/manacher (ts)');
