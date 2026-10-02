function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { replaceWords } from '../../problems/replace_words/solution.js';



assert(
    replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery") === "the cat was rat by the bat",
    "replaceWords"
  );
console.log('PASS 09_tries/replace_words (js)');
