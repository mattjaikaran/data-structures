function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { romanToInt } from '../../problems/roman_to_int/solution.ts';



assert(romanToInt("MCMXCIV")===1994&&romanToInt("III")===3,"romanToInt");
console.log('PASS 03_strings/roman_to_int (ts)');
