function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { partitionLabels } from '../../problems/partition_labels/solution.js';

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

assert(eq(partitionLabels("ababcbacadefegdehijhklij"),[9,7,8]), "partitionLabels");
console.log('PASS 14_greedy/partition_labels (js)');
