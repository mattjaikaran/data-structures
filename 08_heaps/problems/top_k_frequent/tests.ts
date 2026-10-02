function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { topKFrequent } from '../../problems/top_k_frequent/solution.ts';



assert(new Set(topKFrequent([1,1,1,2,2,3],2)).has(1)&&new Set(topKFrequent([1,1,1,2,2,3],2)).has(2),"topKFrequent");
console.log('PASS 08_heaps/top_k_frequent (ts)');
