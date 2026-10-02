function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { romanToInt } from '../../problems/roman_to_int/solution.js';



assert(romanToInt("MCMXCIV") === 1994 && romanToInt("III") === 3, "romanToInt");
console.log('PASS 03_strings/roman_to_int (js)');
