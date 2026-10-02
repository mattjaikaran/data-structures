function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { multiplyStrings } from '../../problems/multiply_strings/solution.ts';



assert(multiplyStrings("123","456")==="56088","multiply");
assert(multiplyStrings("0","0")==="0","multiply zero");
console.log('PASS 03_strings/multiply_strings (ts)');
