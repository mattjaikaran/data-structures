function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { wordSearch } from '../../problems/word_search/solution.js';



const grid = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
assert(wordSearch(grid.map(r=>[...r]), "ABCCED"), "wordSearch found");
assert(!wordSearch(grid.map(r=>[...r]), "ABCB"), "wordSearch not found");
console.log('PASS 13_backtracking/word_search (js)');
