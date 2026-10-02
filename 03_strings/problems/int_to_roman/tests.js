function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { intToRoman } from '../../problems/int_to_roman/solution.js';



assert(intToRoman(1994) === "MCMXCIV" && intToRoman(3) === "III", "intToRoman");
console.log('PASS 03_strings/int_to_roman (js)');
