function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { letterCombinations } from '../../problems/letter_combinations/solution.ts';

const eq = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

assert(eq(letterCombinations("23").sort(), ["ad","ae","af","bd","be","bf","cd","ce","cf"].sort()), "letterCombinations");
console.log('PASS 13_backtracking/letter_combinations (ts)');
