function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { longestWordInDictionary } from '../../problems/longest_word_in_dictionary/solution.ts';



assert(longestWordInDictionary(["w","wo","wor","worl","world"])==="world","longest");
console.log('PASS 09_tries/longest_word_in_dictionary (ts)');
