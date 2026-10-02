function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { intToRoman } from '../../problems/int_to_roman/solution.ts';



assert(intToRoman(1994)==="MCMXCIV"&&intToRoman(3)==="III","intToRoman");
console.log('PASS 03_strings/int_to_roman (ts)');
