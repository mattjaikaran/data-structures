function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { isAnagram } from '../../problems/is_anagram/solution.ts';



assert(isAnagram("anagram","nagaram")&&!isAnagram("rat","car"),"anagram");
console.log('PASS 03_strings/is_anagram (ts)');
