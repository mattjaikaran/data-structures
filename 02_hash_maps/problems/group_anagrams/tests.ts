function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { groupAnagrams } from '../../problems/group_anagrams/solution.ts';



const groups=groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
assert(groups.length===3,"groupAnagrams count");
console.log('PASS 02_hash_maps/group_anagrams (ts)');
