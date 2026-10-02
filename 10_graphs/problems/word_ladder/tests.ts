function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { wordLadder } from '../../problems/word_ladder/solution.ts';



assert(wordLadder("hit","cog",["hot","dot","dog","lot","log","cog"])===5,"wordLadder");
console.log('PASS 10_graphs/word_ladder (ts)');
