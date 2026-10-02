function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { buildTreeFromPreIn } from '../../problems/build_tree_from_pre_in/solution.ts';
import { fromArray } from '../../fundamentals/bst/solution.ts';

const eq = (a: unknown, b: unknown) => JSON.stringify(a)===JSON.stringify(b);

assert(eq(buildTreeFromPreIn([3,9,20,15,7],[9,3,15,20,7]),fromArray([3,9,20,null,null,15,7])),"buildFromPreIn");
console.log('PASS 07_trees/build_tree_from_pre_in (ts)');
