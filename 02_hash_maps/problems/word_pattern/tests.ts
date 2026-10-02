function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { wordPattern } from '../../problems/word_pattern/solution.ts';



assert(wordPattern("abba","dog cat cat dog"),"wordPat");
assert(!wordPattern("abba","dog cat cat fish"),"wordPat2");
console.log('PASS 02_hash_maps/word_pattern (ts)');
