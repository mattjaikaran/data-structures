function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { wordSearchII } from '../../problems/word_search_ii/solution.js';



const board = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"],
  ];
const found = new Set(wordSearchII(board, ["oath", "pea", "eat", "rain"]));
assert(found.has("oath") && found.has("eat"), "wordSearch");
console.log('PASS 09_tries/word_search_ii (js)');
