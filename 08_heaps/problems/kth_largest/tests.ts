function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { kthLargest } from '../../problems/kth_largest/solution.ts';



assert(kthLargest([3,2,1,5,6,4],2)===5,"kthLargest");
assert(kthLargest([3,2,3,1,2,4,5,5,6],4)===4,"kthLargest dups");
console.log('PASS 08_heaps/kth_largest (ts)');
