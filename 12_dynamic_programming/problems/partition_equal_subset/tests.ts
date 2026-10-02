function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { partitionEqualSubset } from '../../problems/partition_equal_subset/solution.ts';



assert(partitionEqualSubset([1,5,11,5])&&!partitionEqualSubset([1,2,3,5]),"partition");
console.log('PASS 12_dynamic_programming/partition_equal_subset (ts)');
