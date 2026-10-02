function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { reverseWords } from '../../problems/reverse_words/solution.ts';



assert(reverseWords("  the sky is blue  ")==="blue is sky the","reverseWords");
console.log('PASS 03_strings/reverse_words (ts)');
