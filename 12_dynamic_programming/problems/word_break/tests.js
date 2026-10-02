function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { wordBreak } from '../../problems/word_break/solution.js';



assert(wordBreak("leetcode",["leet","code"])&&!wordBreak("catsandog",["cats","dog","sand","and","cat"]),"wordBreak");
console.log('PASS 12_dynamic_programming/word_break (js)');
