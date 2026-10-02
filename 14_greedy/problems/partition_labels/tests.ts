function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { partitionLabels } from '../../problems/partition_labels/solution.ts';

const eq = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

assert(eq(partitionLabels("ababcbacadefegdehijhklij"),[9,7,8]), "partitionLabels");
console.log('PASS 14_greedy/partition_labels (ts)');
