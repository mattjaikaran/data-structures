function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { wordSearch } from '../../problems/word_search/solution.ts';



const grid = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
assert(wordSearch(grid.map(r=>[...r]), "ABCCED"), "wordSearch found");
assert(!wordSearch(grid.map(r=>[...r]), "ABCB"), "wordSearch not found");
console.log('PASS 13_backtracking/word_search (ts)');
