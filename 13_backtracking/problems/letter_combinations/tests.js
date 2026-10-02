function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { letterCombinations } from '../../problems/letter_combinations/solution.js';

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

assert(eq(letterCombinations("23").sort(), ["ad","ae","af","bd","be","bf","cd","ce","cf"].sort()), "letterCombinations");
console.log('PASS 13_backtracking/letter_combinations (js)');
